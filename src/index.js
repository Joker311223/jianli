// 导入样式
import './styles/main.css';

// 导入数据和渲染函数
import { resumeData } from './data/resumeData';
import { renderResume } from './utils/render';

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', () => {
    renderResume(resumeData);
});