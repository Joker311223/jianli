// 渲染函数
export function renderResume(resumeData) {
    // 先渲染注解
    renderAnnotations(resumeData.annotations);
    
    // 处理文本内容，为注解关键词添加可点击标记
    const processedData = processAnnotatedTerms(resumeData);
    // 渲染基本信息
    document.getElementById('name').textContent = processedData.basicInfo.name;
    document.getElementById('subtitle').textContent = 
        `${processedData.basicInfo.title} · ${processedData.basicInfo.school}`;
    
    

    // 渲染联系方式
    const contactInfoHTML = processedData.basicInfo.contacts.map(contact => `
        <div class="contact-item">
            ${contact.icon}
            ${contact.text}
        </div>
    `).join('');
    document.getElementById('contactInfo').innerHTML = contactInfoHTML;

    // 渲染工作经历
    const workExperienceHTML = processedData.workExperience.map(work => {
        return `
            <div class="work-company-section">
                <div class="company-info">
                    <div class="company-name">${work.company}</div>
                    <div class="item-position">${work.position}</div>
                </div>
                <div class="projects-container">
                    ${work.projects.map(project => `
                        <div class="experience-item">
                            <div class="project-header">
                                <h3 class="project-title">${project.name}</h3>
                                <div class="project-date">${project.date}</div>
                            </div>
                            <div class="item-description">
                                ${project.description ? `<p><strong>项目描述：</strong>${project.description}</p>` : ''}
                                ${project.challenges ? `<p><strong>技术难点：</strong>${project.challenges}</p>` : ''}
                                ${project.highlights ? `<p><strong>技术亮点：</strong>${project.highlights}</p>` : ''}
                                ${project.responsibility ? `<p><strong>责任描述：</strong>${project.responsibility}</p>` : ''}
                            </div>
                            <div class="tags">
                                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    document.getElementById('workExperience').innerHTML = workExperienceHTML;

    // 渲染教育经历
    const educationHTML = processedData.education.map(edu => `
        <div class="education-item">
            <div class="item-header">
                <div>
                    <div class="item-title">${edu.school}</div>
                    <div class="item-company">${edu.degree}</div>
                </div>
                <div class="item-date">${edu.date}</div>
            </div>
            ${edu.major ? `
                <div class="item-description">
                    <p><strong>研究方向：</strong>${edu.major}</p>
                </div>
            ` : ''}
            ${edu.publications.length > 0 ? `
                <div class="publications">
                    <strong style="color: #2c3e50; display: block; margin-bottom: 10px;">📚 学术成果</strong>
                    ${edu.publications.map(pub => `
                        <div class="publication-item">${pub}</div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
    document.getElementById('education').innerHTML = educationHTML;


    // 渲染个人简介
    const selfIntroHTML = processedData.selfIntro.map(intro => `
        <p>${intro}</p>
    `).join('');
    document.getElementById('selfIntro').innerHTML = selfIntroHTML;
}

// 处理注解关键词，为关键词添加可点击标记
function processAnnotatedTerms(data) {
    if (!data.annotations || data.annotations.length === 0) {
        return data;
    }

    // 创建注解关键词映射
    const annotationMap = {};
    data.annotations.forEach(annotation => {
        annotationMap[annotation.term] = annotation;
    });

    // 深拷贝数据，避免修改原始数据
    const processedData = JSON.parse(JSON.stringify(data));

    // 处理函数：为文本中的注解关键词添加HTML标记
    function processText(text) {
        if (typeof text !== 'string') return text;
        
        let processedText = text;
        // 按关键词长度降序排序，避免短词匹配问题
        const terms = Object.keys(annotationMap).sort((a, b) => b.length - a.length);
        
        terms.forEach(term => {
            // 使用正则表达式进行全局替换，避免部分匹配
            const regex = new RegExp(`\\b${term}\\b`, 'g');
            processedText = processedText.replace(regex, 
                `<span class="annotated-term" data-term="${term}" onclick="scrollToAnnotation('${term}')">${term}</span>`
            );
        });
        
        return processedText;
    }

    // 递归处理对象中的所有字符串
    function processObject(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                obj[key] = processText(obj[key]);
            } else if (Array.isArray(obj[key])) {
                obj[key] = obj[key].map(item => {
                    if (typeof item === 'string') {
                        return processText(item);
                    } else if (typeof item === 'object' && item !== null) {
                        return processObject(item);
                    }
                    return item;
                });
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                obj[key] = processObject(obj[key]);
            }
        }
        return obj;
    }

    return processObject(processedData);
}

// 渲染注解区域
function renderAnnotations(annotations) {
    if (!annotations || annotations.length === 0) {
        document.getElementById('annotationsContent').innerHTML = '<p>暂无注解内容</p>';
        return;
    }

    const annotationsHTML = annotations.map((annotation, index) => `
        <div class="annotation-item" id="annotation-${annotation.term}">
            <div class="annotation-term">${annotation.term}</div>
            <div class="annotation-definition">${annotation.definition}</div>
        </div>
    `).join('');

    document.getElementById('annotationsContent').innerHTML = annotationsHTML;
}

// 滚动到指定注解
function scrollToAnnotation(term) {
    const annotationElement = document.getElementById(`annotation-${term}`);
    if (annotationElement) {
        // 添加高亮效果
        annotationElement.style.background = 'linear-gradient(135deg, #667eea30 0%, #764ba230 100%)';
        annotationElement.style.transform = 'scale(1.02)';
        
        // 滚动到注解位置
        annotationElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        // 2秒后移除高亮效果
        setTimeout(() => {
            annotationElement.style.background = '';
            annotationElement.style.transform = '';
        }, 2000);
    }
}

// 将scrollToAnnotation函数暴露到全局作用域，以便HTML中的onclick可以调用
window.scrollToAnnotation = scrollToAnnotation;