#!/bin/bash

# 部署配置
SERVER_USER="root"
SERVER_HOST="47.99.48.243"
SERVER_PATH="/www/wwwroot/jianli"
LOCAL_DIST="dist"

echo "🚀 开始部署到服务器..."

# 1. 构建项目
echo "📦 正在构建项目..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，部署终止"
    exit 1
fi

echo "✅ 构建完成"

# 2. 备份服务器上的旧文件（可选）
echo "💾 备份服务器旧文件..."
ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && [ -d backup ] || mkdir backup && [ -f index.html ] && tar -czf backup/backup-\$(date +%Y%m%d-%H%M%S).tar.gz * --exclude=backup || echo '无需备份'"

# 3. 清空服务器目标目录（保留 backup 文件夹）
echo "🧹 清空服务器目标目录..."
ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && find . -maxdepth 1 ! -name '.' ! -name '..' ! -name 'backup' -exec rm -rf {} +"

# 4. 上传 dist 目录中的所有文件
echo "📤 上传文件到服务器..."
scp -r ${LOCAL_DIST}/* ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

if [ $? -ne 0 ]; then
    echo "❌ 上传失败"
    exit 1
fi

# 5. 设置正确的文件权限
echo "🔐 设置文件权限..."
ssh ${SERVER_USER}@${SERVER_HOST} "cd ${SERVER_PATH} && chown -R www:www * && chmod -R 755 *"

echo "✅ 部署完成！"
echo "🌐 访问地址: https://yinjiacheng.ttkjia.cn"
