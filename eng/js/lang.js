        const icon = '<i class="fa fa-calendar fa-fw w3-margin-right"></i>';
        const pageTitle = document.getElementById('pageTitle');
        const languageToggle = document.getElementById('language-toggle');
        const date1 = document.getElementById('date1'); // Define date1
		const date2 = document.getElementById('date2'); // Define date2
		const date3 = document.getElementById('date3'); // Define date3
		const date4 = document.getElementById('date4'); // Define date4
        const initialText = date1.textContent; // Store the initial text content
		const initialT2 = date2.textContent;
		const initialT3 = date3.textContent;
		const initialT4 = date4.textContent;
		const headings = document.querySelectorAll('h2');
		const headers = document.querySelectorAll('h5');
		const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
		const line3 = document.getElementById('line3');
		const line4 = document.getElementById('line4');
		const line5 = document.getElementById('line5');
		const line6 = document.getElementById('line6');
		const line7 = document.getElementById('line7');
		const line8 = document.getElementById('line8');
		const line9 = document.getElementById('line9');
		const line10 = document.getElementById('line10');
		const line11 = document.getElementById('line11');
		const line12 = document.getElementById('tet1');		
		const line13 = document.getElementById('tet2');		
		const line14 = document.getElementById('tet3');		
		const line15 = document.getElementById('tet4');		
		const line16 = document.getElementById('tet5');
		const line17 = document.getElementById('line17');
		const line18 = document.getElementById('line18');
		const line19 = document.getElementById('line19');
		const line20 = document.getElementById('line20');
		const line21 = document.getElementById('line21');
		const line22 = document.getElementById('line22');
		const line23 = document.getElementById('line23');
		const line24 = document.getElementById('line24');		
		const elements = document.querySelectorAll('p.w3-large.w3-text-black b');
		let isSpanish = false; // Declare the variable outside the event listener
        languageToggle.addEventListener('click',function () {
            if (languageToggle.textContent === 'English Version') {
                languageToggle.textContent = 'Versión en Español';
                pageTitle.textContent = 'Ulises Quinonez Resume';
                isSpanish = true;

                // Toggle the text content of the date1 element
                // Add the icon before the text content
                date1.innerHTML = icon + initialText.replace('May 2022 - Actualmente', 'May 2022 - Currently');
				date2.innerHTML = icon + initialT2.replace('Ene 2013 - May 2014', 'Jan 2013 - May 2014');
				date3.innerHTML = icon + initialT3.replace('Dic 2011 - Ene 2013', 'Dec 2011 - Jan 2013');
				date4.innerHTML = icon + initialT4.replace('Jul 2011- Dic 2011', 'Jul 2011 - Dec 2011');
				
				headings.forEach((heading) => {
                switch (heading.textContent) {
                    case 'Ulises Quiñónez':
                        heading.textContent = 'Ulises Quinonez';
                        break;
                    case 'Un par de proyectos':
                        heading.textContent = 'A couple of projects';
                        break;
					case 'Experiencia Profesional':
						heading.innerHTML = '<i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Professional Experience';
						break;
                    case 'Formación':
                        heading.textContent = 'Education';
                        break;
                }
            });		
				headers.forEach((heading) => {
				switch (heading.textContent) {
                    case 'Ingeniero de Automatización de Pruebas de TI / CONDUENT':
                        heading.textContent = 'IT Test Automation Engineer / CONDUENT';
                        break;
                    case 'Analista Líder de Aseguramiento de Calidad de Software / CONDUENT':
                        heading.textContent = 'SQA LEAD / CONDUENT';
                        break;
                    case 'Analista de Proyectos / BANTRAB':
                        heading.textContent = 'Project Analyst / BANTRAB';
                        break;
                    case 'Analista de Calidad de Software / FINCA':
                        heading.textContent = 'Software Quality Analyst / FINCA';
                        break;
					case 'Auditor de procesos / BANRURAL':
                        heading.textContent = 'Process Auditor / BANRURAL';
                        break;
					case 'Ingeniero de Soporte / MFSI(FINCA)':
                        heading.textContent = 'Support Engineer / MFSI(FINCA)';
                        break;
					case 'Universidad Católica San Antonio de Murcia':
                        heading.textContent = 'San Antonio de Murcia Catholic University';
                        break;
					case 'Universidad de San Carlos de Guatemala':
                        heading.textContent = 'San Carlos de Guatemala University';
                        break;
					case '(ISC)²':
                        heading.textContent = '(ISC)²';
                        break;
					case 'Microsoft':
                        heading.textContent = 'Microsoft';
                        break;
					case 'Coursera':
                        heading.textContent = 'Coursera';
                        break;
                }
				 heading.classList.add('bold-h5'); // Add a CSS class to the <h5> elements
            });	
                line1.innerHTML = '<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Read, Write, Code, Solve</b>';
                line2.innerHTML = '<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Guatemala City</b>';
				line3.textContent = 'TFS & MTM';
				line4.textContent =  'Data Analytics';
				line5.textContent =  'Quality Management Systems';
				line6.textContent =  'Project Management';
				line7.textContent =  'Databases - SQL Server and PostgreSQL';
				line8.textContent =  'Spanish';
				line9.textContent =  'English';
				line10.textContent = 'French';
				line11.textContent = 'Guatemalan Sign Language';
				line12.textContent = 'Master\'s Degree in Information Security and Business Continuity';
				line13.textContent = 'Industrial Engineer  - Collegiate 5185';
				line14.textContent = 'Certified in Cybersecurity';
				line15.textContent = 'MTA: Networking Fundamentals';
				line16.textContent = 'Data Science Specialization';
				line17.textContent = 'Design and Development of test automation procedures, following established automation guidelines. Adept at investigating and resolving failures throughout the testing process. Collaborative teamwork with Quality Assurance Analysts and Developers to craft innovative solutions, utilizing an array of tools including SCRUM, Postman, Azure DevOps, Java, Maven, and more.';			
				line18.textContent = 'Review of quality specifications and technical design documents. Crafting meticulous, comprehensive, and organized test cases and test plans. Skillfully estimating, prioritizing, planning, and coordinating quality assurance activities. Proficient in conducting performance, load, and regression testing, leveraging tools such as Team Foundation Server (TFS), Microsoft Test Manager (MTM), Microsoft Visual Studio, Selenium WebDriver, and C#.';
				line19.textContent = 'Identification and analysis of the core business processes and workflows. Project management and process improvement. Documentation of processes and workflows. Development of clear and detailed process maps and business requirements. Identification of risks and opportunities.';
				line20.textContent = 'Evaluation and testing of Microfinance programs and IT development procedures. Review of new or modified modules, including documentation, input/output documents, and flow charts, to determine if the program meets the requirements and complies with the guidelines. Documentation of the programs to describe the evaluation, testing, and correction process.';
				line21.textContent = 'Review of compliance with established policies and procedures through the internal audit program. Implementation of improvements in processes and systems.';
				line22.textContent = 'Technical support by phone, Messenger, Skype, email, and GoToAssist to clients in Latin America, Eastern Europe, and Africa in both Spanish and English. Documentation of incident resolution and improvements. Training for users on new modules. Analysis and design of new features.';	
				line23.textContent = 'Find me on social media.';
				line24.textContent = 'Powered by';
				elements.forEach((element) => {
				if (element.textContent.includes('Competencias')) {
					// Replace 'Competencias' with 'Skills'
					element.innerHTML = `<i class="fa fa-asterisk fa-fw w3-margin-right w3-text-black"></i>${element.textContent.replace('Competencias', 'Skills')}`;
				}
				if (element.textContent.includes('Idiomas')) {
					// Replace 'Idiomas' with 'Languages'
					element.innerHTML = `<i class="fa fa-globe fa-fw w3-margin-right w3-text-black"></i>${element.textContent.replace('Idiomas', 'Languages')}`;
				}
				});
				} else {
                languageToggle.textContent = 'English Version';
                pageTitle.textContent = 'Hoja de Vida - Ulises Quiñónez';
                isSpanish = false;
                // Toggle the text content of the date1 element back to its original English value
                // Add the icon before the text content                
				date1.innerHTML = icon + initialText.replace('May 2022 - Actualmente', 'May 2022 - Actualmente');
				date2.innerHTML = icon + initialT2.replace('Ene 2013 - May 2014', 'Ene 2013 - May 2014');
				date3.innerHTML = icon + initialT3.replace('Dic 2011 - Ene 2013', 'Dic 2011 - Ene 2013');
				date4.innerHTML = icon + initialT4.replace('Jul 2011- Dic 2011', 'Jul 2011- Dic 2011');
				
				headings.forEach((heading) => {
                switch (heading.textContent) {
                    case 'Ulises Quinonez':
                        heading.textContent = 'Ulises Quiñónez';
                        break;
                    case 'A couple of projects':
                        heading.textContent = 'Un par de proyectos';
                        break;
                    case 'Professional Experience':
						heading.innerHTML = '<i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Experiencia Profesional';
                        break;
				    case 'Education':
                        heading.textContent = 'Formación';
                        break;
                }		
            });			
			headers.forEach((heading) => {
				switch (heading.textContent) {
                    case 'IT Test Automation Engineer / CONDUENT':
                        heading.textContent = 'Ingeniero de Automatización de Pruebas de TI / CONDUENT';
                        break;
                    case 'SQA LEAD / CONDUENT':
                        heading.textContent = 'Analista Líder de Aseguramiento de Calidad de Software / CONDUENT';
                        break;
                    case 'Project Analyst / BANTRAB':
                        heading.textContent = 'Analista de Proyectos / BANTRAB';
                        break;
                    case 'Software Quality Analyst / FINCA':
                        heading.textContent = 'Analista de Calidad de Software / FINCA';
                        break;
					case 'Process Auditor / BANRURAL':
                        heading.textContent = 'Auditor de procesos / BANRURAL';
                        break;
					case 'Support Engineer / MFSI(FINCA)':
                        heading.textContent = 'Ingeniero de Soporte / MFSI(FINCA)';
                        break;
					case 'San Antonio de Murcia Catholic University':
                        heading.textContent = 'Universidad Católica San Antonio de Murcia';
                        break;
					case 'San Carlos de Guatemala University':
                        heading.textContent = 'Universidad de San Carlos de Guatemala';
                        break;
					case '(ISC)²':
                        heading.textContent = '(ISC)²';
                        break;
					case 'Microsoft':
                        heading.textContent = 'Microsoft';
                        break;
					case 'Coursera':
                        heading.textContent = 'Coursera';
                        break;
                }
				 heading.classList.add('bold-h5'); // Add a CSS class to the <h5> elements
            });
                line1.innerHTML = '<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Leer, Escribir, Programar, Resolver</b>';
                line2.innerHTML = '<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i><b>Guatemala, Ciudad</b>';	
				line3.textContent = 'TFS y MTM';
				line4.textContent = 'Análisis de Datos';
				line5.textContent = 'Sistemas de Gestión de Calidad';
				line6.textContent = 'Administración de Proyectos';
				line7.textContent = 'Bases de Datos - SQL Server y PostgreSQL';
				line8.textContent = 'Español';
				line9.textContent = 'Inglés';
				line10.textContent = 'Francés';
				line11.textContent = 'LenSeGua';
				line12.textContent = 'Máster en Seguridad de la Información y Continuidad de Negocio';
				line13.textContent = 'Ingeniero Industrial - Colegiado 5185';
				line14.textContent = 'Certificado en Ciberseguridad';
				line15.textContent = 'MTA: Fundamentos de Redes';
				line16.textContent = 'Especialización en Ciencia de Datos';	
				line17.textContent = 'Diseño y desarrollo de procedimientos de automatización de pruebas. Utilización de directrices de automatización de pruebas. Investigación de fallos a través del proceso de pruebas. Colaboración con Analistas de Aseguramiento de Calidad y Programadores para el desarrollo de Soluciones, con herramientas como SCRUM, Postman, Azure DevOps, Java, Maven, etc.';
				line18.textContent = 'Revisión de especificaciones de calidad y documentos de diseño técnico. Creación de casos de prueba y planes de prueba detallados, completos y bien estructurados. Estimación, priorización, planificación y coordinación de actividades de prueba de calidad. Realización de pruebas de desempeño, carga y regresión, utilizando Team Foundation Server (TFS), Administrador de pruebas de Microsoft (MTM), Microsoft Visual Studio, Selenium WebDriver, C#';
				line19.textContent = 'Identificación y análisis de los procesos y flujos de trabajo centrales del negocio. Gestión de proyectos y mejora de procesos. Documentación de procesos y flujos de trabajo. Desarrollo de mapas de procesos y requisitos comerciales claros y detallados. Identificación de riesgos y oportunidades.';
				line20.textContent = 'Evaluación y prueba de programas de Microfinanzas y procedimientos de desarrollo informático. Revisión de módulos nuevo o modificados, incluyendo la documentación, el los documentos de Entrada/Salida y el diagrama de flujo, para determinar si el programa funciona de acuerdo a los requerimientos y se ajusta a las pautas. Documentación de los programas para describir la evaluación, prueba y corrección.';
				line21.textContent = 'Revisión del cumplimento de las políticas y los procedimientos establecidos a través del programa de auditoría interna. Implementación de mejoras en los procesos y sistemas.';
				line22.textContent = 'Asistencia técnica por teléfono, Messenger, Skype, correo electrónico y GoToAssist a clientes en América Latina, Europa del Este y África tanto en español como en inglés. Documentación de la resolución de incidentes y mejoras. Formación a usuarios en nuevos módulos. Análisis y Diseño de nuevas funcionalidades.';	
				line23.textContent = 'Redes Sociales.';
				line24.textContent = 'Con Tecnología de ';
				elements.forEach((element) => {
				if (element.textContent.includes('Skills')) {
					// Replace 'Competencias' with 'Skills'
					element.innerHTML = `<i class="fa fa-asterisk fa-fw w3-margin-right w3-text-black"></i>${element.textContent.replace('Skills', 'Competencias')}`;
				}
				if (element.textContent.includes('Languages')) {
					// Replace 'Idiomas' with 'Languages'
					element.innerHTML = `<i class="fa fa-globe fa-fw w3-margin-right w3-text-black"></i>${element.textContent.replace('Languages','Idiomas')}`;
				}
				});
				}
			});
