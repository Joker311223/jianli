// 渲染函数
export function renderResume(resumeData) {
    // 渲染基本信息
    document.getElementById('name').textContent = resumeData.basicInfo.name;
    document.getElementById('subtitle').textContent = 
        `${resumeData.basicInfo.title} · ${resumeData.basicInfo.school}`;
    
    // 渲染联系方式
    const contactInfoHTML = resumeData.basicInfo.contacts.map(contact => `
        <div class="contact-item">
            ${contact.icon}
            ${contact.text}
        </div>
    `).join('');
    document.getElementById('contactInfo').innerHTML = contactInfoHTML;

    // 渲染工作经历
    const workExperienceHTML = resumeData.workExperience.map(work => {
        const projectsHTML = work.projects.map(project => `
            <div class="experience-item">
                <div class="item-header">
                    <div>
                        <div class="item-title">${work.company}</div>
                        <div class="item-position">${work.position}</div>
                    </div>
                    <div class="item-date">${work.date}</div>
                </div>
                <div class="item-description">
                    <p><strong>项目：${project.name}</strong></p>
                    ${project.description ? `<p><strong>项目描述：</strong>${project.description}</p>` : ''}
                    ${project.challenges ? `<p><strong>技术难点：</strong>${project.challenges}</p>` : ''}
                    ${project.highlights ? `<p><strong>技术亮点：</strong>${project.highlights}</p>` : ''}
                    ${project.responsibility ? `<p><strong>责任描述：</strong>${project.responsibility}</p>` : ''}
                </div>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
        return projectsHTML;
    }).join('');
    document.getElementById('workExperience').innerHTML = workExperienceHTML;

    // 渲染教育经历
    const educationHTML = resumeData.education.map(edu => `
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

    // 渲染其他项目
    const projectsHTML = resumeData.projects.map(project => `
        <div class="project-item">
            <div class="item-title">${project.name}</div>
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
    `).join('');
    document.getElementById('projects').innerHTML = projectsHTML;

    // 渲染个人简介
    const selfIntroHTML = resumeData.selfIntro.map(intro => `
        <p>${intro}</p>
    `).join('');
    document.getElementById('selfIntro').innerHTML = selfIntroHTML;
}