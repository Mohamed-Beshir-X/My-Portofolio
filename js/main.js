document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Translations
    const translations = {

        "en": {
            "hero.alt": "Portrait of the student, looking forward with quiet confidence.",
            "hero.title": "Mohamed Beshir",
            "hero.intro": "I believe that true academic growth goes beyond personal acquisition; it is the preparation for meaningful social contribution. My journey is defined by a commitment to learning, a clarity of purpose, and a desire to build pathways for others.",

            "step1.title": "Chapter One: Hard Beginnings",
            "step1.p1": "My academic path began in an environment where aspiration often outpaced opportunity. Facing difficult financial conditions within my family, I learned early that resources are not the defining factor of success; discipline is.",
            "step1.p2": "Rather than viewing these limitations as barriers, I accepted them as the conditions of my work. They taught me to value effort, to maximize the free resources available to me, and to maintain resilience. This background has grounded me in a reality where nothing is taken for granted, and every opportunity is earned.",

            "step2.title": "Achievements That Pushed Me Forward Despite Conditions",
            "step2.row1.title": "My Achievement in Sports (Especially Taekwondo)",
            "step2.row2.title": "Diverse Skills and Talents Despite Limited Resources",
            "step2.row3.title": "Complete Quran Memorization",
            "step2.row4.title": "Teacher Certificates and Other Skills",

            "step3.title": "The Turning Question",
            "step3.question": "If I managed to learn from free resources, why are many others still lost?",

            "step4.title": "The Answer: Massary",
            "step4.lead": "Massary is a response, not a startup.",
            "step4.p1": "I realized that the problem for many wasn't a lack of information, but a lack of structure. Massary is NOT piracy, and NOT about shortcuts. It is a structured, game-like educational platform designed to give underprivileged youth their first push.",
            "step4.p2": "It bridges the gap between scattered free content and the disciplined study habits needed to master it, proving that self-reliance is possible.",

            "step5.title": "Concrete Proof",
            "step5.feat1": "A structured library of over 1,200 educational videos, carefully organized into clear learning paths rather than scattered content.",
            "step5.feat2": "An educational library designed with love",
            "step5.feat3": "The Dream Nursery: a system that helps students transform vague ambitions into clear, actionable learning goals.",
            "step5.feat4": "Massary TV: a filtered YouTube experience that removes distractions and guides students toward purposeful educational content.",
            "step5.feat5": "Context-aware motivational messages that support learners during moments of fatigue, doubt, or loss of direction.",
            "step5.feat6": "A controlled random-gifts system designed to break monotony while preserving educational value.",
            "step5.feat7": "Rare rewards introduced intentionally to reinforce consistency rather than short-term motivation.",
            "step5.feat8": "Meaningful course completion recognition that emphasizes effort and commitment, not just completion.",
            "step5.feat9": "Massary Youth Family: a community space built to replace isolation with shared growth and accountability.",
            "step5.feat10": "A direct message from the founder, reinforcing the human connection behind the platform.",
            "step5.feat11": "A real user database tracking age, city, and device usage to better understand learner needs and improve accessibility.",
            "step5.note": "All of this was built individually, with minimal financial resources and no external team.",
            "step5.btn": "Try Massary",

            "step6.title": "A Deliberate Pause",
            "step6.p1": "Currently, operation of the Massary project has been paused. This decision was made with careful consideration of my current responsibilities: high school final examinations and family pressure.",
            "step6.p2": "I do not view this as a failure, but as an exercise in maturity. To lead others effectively, I must first secure my own academic foundation. This pause ensures that when I return to Massary, I will do so with the stability and resources required to sustain it long-term.",

            "step7.title": "Clear Future Vision",
            "step7.p1": "My path forward is designed with one outcome in mind: Impact.",
            "step7.goal1": "Excel in high school first.",
            "step7.goal2": "Specialize deeply in programming.",
            "step7.goal3": "Build a strong team for Massary.",
            "step7.goal4": "Reach the first 1,000 learners.",
            "step7.goal5": "Help every young person who feels lost.",

            "explore.title": "Evidence of Work",
            "explore.p1": "For a practical understanding of my technical capabilities:",
            "explore.github": "View GitHub Profile",
            "explore.archive": "View Project Archives",

            "closing.msg": "This student understands responsibility, impact, and purpose.",

            "footer.copy": "&copy; 2026. All rights reserved.",
            "footer.github": "GitHub",
            "footer.contact": "Contact",

            "tooltip.lang.text": "Select your language to explore the site in Arabic or English.",
            "tooltip.lang.button": "Got it"
        },
        "ar": {
            "hero.alt": "صورة شخصية للطالب، ينظر للمستقبل بثقة هادئة.",
            "hero.title": "محمد بشير",
            "hero.intro": "أؤمن بأن النمو الأكاديمي الحقيقي يتجاوز المكاسب الشخصية؛ إنه الإعداد للمساهمة الاجتماعية الهادفة. رحلتي تحددها الالتزام بالتعلم، ووضوح الغاية، والرغبة في بناء مسارات للآخرين.",

            "step1.title": "الفصل الأول: بدايات صعبة",
            "step1.p1": "بدأ مساري الأكاديمي في بيئة طالما سبقت فيها الطموحاتُ الفرصَ المتاحة. في ظل ظروف مالية صعبة، تعلمت مبكرًا أن الموارد ليست العامل المحدد للنجاح؛ بل الانضباط هو الأساس.",
            "step1.p2": "بدلاً من اعتبار هذه القيود حواجز، قبلتها كشروط لعملي. علمتني الاعتماد على النفس، وكيفية تعظيم الاستفادة من المصادر المجانية المتناثرة. هذه الخلفية رسخت لدي واقعًا لا يُؤخذ فيه شيء كأمر مسلم به، وكل فرصة يجب أن تُكتسب.",

            "step2.title": "إنجازات دفعتني للأمام رغم الظروف",
            "step2.row1.title": "إنجازي في الرياضة (خصوصًا التايكوندو)",
            "step2.row2.title": "مهارات ومواهب متنوعة و مراكز ضخمة",
            "step2.row3.title": "حفظ القرآن الكريم كاملًا",
            "step2.row4.title": "شهادات المدرسين ومهارات أخرى",

            "step3.title": "السؤال المحوري",
            "step3.question": "إذا تمكنت من التعلم عبر المصادر المجانية، لماذا لا يزال الكثيرون تائهين؟",

            "step4.title": "الإجابة: مساري",
            "step4.lead": "مساري هو استجابة، وليس شركة ناشئة.",
            "step4.p1": "أدركت أن المشكلة ليست في نقص المعلومات، بل في غياب الهيكلة. 'مساري' ليس قرصنة ولا طرقًا مختصرة. إنه منصة تعليمية منظمة تشبه الألعاب، صُممت لتمنح الشباب الأقل حظًا دفعتهم الأولى.",
            "step4.p2": "إنه يسد الفجوة بين المحتوى المجاني المتناثر وعادات الدراسة المنضبطة اللازمة لإتقانه.",

            "step5.title": "دليل ملموس",
            "step5.feat1": "مكتبة تعليمية تضم أكثر من 1200 فيديو، مرتبة بعناية داخل مسارات واضحة بدلًا من محتوى عشوائي متفرق.",
            "step5.feat2": "مكتبة تعليمية بتسعير عملة الزيتنونة الافتراضبة.",
            "step5.feat3": "مشتل الأحلام: نظام يساعد الطالب على تحويل حلم غير واضح إلى هدف تعليمي قابل للتنفيذ.",
            "step5.feat4": "تلفاز مساري: تجربة يوتيوب مفلترة تزيل المشتتات وتوجه الطالب نحو محتوى تعليمي هادف.",
            "step5.feat5": "رسائل تحفيزية ذكية تظهر في لحظات التعب أو التشتت أو فقدان الدافع.",
            "step5.feat6": "نظام جوايز عشوائي مُتحكم فيه لكسر الملل دون الإخلال بالقيمة التعليمية.",
            "step5.feat7": "مكافآت نادرة صُممت لتعزيز الاستمرارية، لا التحفيز اللحظي المؤقت.",
            "step5.feat8": "تكريم حقيقي عند إتمام المسارات، يقدّر الجهد والالتزام وليس مجرد الانتهاء.",
            "step5.feat9": "عائلة شباب مساري: مجتمع تعليمي يبدل العزلة بالمشاركة والدعم المتبادل.",
            "step5.feat10": "رسالة مباشرة من المؤسس تعكس البعد الإنساني الحقيقي وراء المنصة.",
            "step5.feat11": "قاعدة بيانات حقيقية للمستخدمين (العمر، المدينة، نوع الجهاز) لفهم الاحتياجات وتحسين الوصول.",
            "step5.note": "تم بناء كل ذلك بشكل فردي، بإمكانيات مادية محدودة، وبدون فريق أو دعم خارجي.",
            "step5.btn": "جرب مساري",

            "step6.title": "وقفة متعمدة",
            "step6.p1": "حاليًا، تم إيقاف عمليات 'مساري' مؤقتًا. هذا القرار اتُخذ بعناية بالنظر إلى مسؤولياتي الحالية: امتحانات الثانوية العامة والواقع المالي لأسرتي.",
            "step6.p2": "لا أنظر لهذا كفشل، بل كتمرين على النضج. لقيادة الآخرين بفعالية مستقبلاً، يجب أن أؤمن أساسي الأكاديمي أولاً. هذه الوقفة تضمن أن عودتي لمساري ستكون باستقرار وموارد تضمن استمراريته.",

            "step7.title": "رؤية مستقبلية واضحة",
            "step7.p1": "طريقي للمستقبل مصمم لنتيجة واحدة: الأثر.",
            "step7.goal1": "التفوق في الثانوية العامة أولاً.",
            "step7.goal2": "التخصص بعمق في البرمجة.",
            "step7.goal3": "بناء فريق قوي لمساري.",
            "step7.goal4": "الوصول لأول 1,000 متعلم.",
            "step7.goal5": "مساعدة كل شاب يشعر بالضياع.",

            "explore.title": "شواهد العمل",
            "explore.p1": "لفهم عملي لقدراتي التقنية:",
            "explore.github": "زيارة ملف GitHub",
            "explore.archive": "أرشيف المشاريع",

            "closing.msg": "هذا الطالب يفهم المسؤولية، والأثر، والهدف.",

            "footer.copy": "&copy; 2026. جميع الحقوق محفوظة.",
            "footer.github": "جيت هب",
            "footer.contact": "تواصل معي",

            "tooltip.lang.text": "اختر لغتك المفضلة من هنا لتصفح الموقع بالعربية أو الإنجليزية.",
            "tooltip.lang.button": "تمام"
        }
    }



    // Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    const html = document.documentElement;

    // Check local storage for language
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        // Update HTML attributes
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Save preference
        localStorage.setItem('lang', lang);

        // Update Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Alt Text
        const altElements = document.querySelectorAll('[data-i18n-alt]');
        altElements.forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (translations[lang][key]) {
                el.alt = translations[lang][key];
            }
        });
    }

    // =========================================
    // Language Tooltip (First-time visitor guide)
    // =========================================
    const langTooltip = document.getElementById('lang-tooltip');
    const tooltipDismiss = langTooltip?.querySelector('.tooltip-dismiss');
    const hasSeenTooltip = localStorage.getItem('lang-tooltip-seen');

    // Show tooltip for first-time visitors
    if (!hasSeenTooltip && langTooltip) {
        setTimeout(() => {
            langTooltip.classList.add('visible');
            langTooltip.setAttribute('aria-hidden', 'false');
        }, 1500); // Show after 1.5 seconds
    }

    // Function to dismiss tooltip
    function dismissTooltip() {
        if (langTooltip) {
            langTooltip.classList.remove('visible');
            langTooltip.setAttribute('aria-hidden', 'true');
            localStorage.setItem('lang-tooltip-seen', 'true');
        }
    }

    // Dismiss on button click
    if (tooltipDismiss) {
        tooltipDismiss.addEventListener('click', dismissTooltip);
    }

    // Dismiss on outside click
    document.addEventListener('click', (e) => {
        if (langTooltip && langTooltip.classList.contains('visible')) {
            // Check if click is outside tooltip and not on language toggle
            if (!langTooltip.contains(e.target) && !langToggle.contains(e.target)) {
                dismissTooltip();
            }
        }
    });

    // Dismiss on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && langTooltip && langTooltip.classList.contains('visible')) {
            dismissTooltip();
            langToggle.focus(); // Return focus to language toggle
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to trigger once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // =========================================
    // Showcase Slider Logic (Multiple Independent Sliders)
    // =========================================
    const sliders = document.querySelectorAll('.showcase-section');

    sliders.forEach(sliderSection => {
        const trackWrapper = sliderSection.querySelector('.showcase-track-wrapper');
        const prevBtn = sliderSection.querySelector('.prev-btn');
        const nextBtn = sliderSection.querySelector('.next-btn');

        if (trackWrapper && prevBtn && nextBtn) {
            // Scroll amount ~ card width (300) + gap (32) = 332
            const scrollAmount = 340;

            nextBtn.addEventListener('click', () => {
                trackWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                trackWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            // Keyboard support for slider (when focused)
            trackWrapper.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    e.preventDefault(); // Prevent page scroll
                    trackWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    trackWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            });
        }
    });

    // =========================================
    // Image Modal Logic
    // =========================================
    const modal = document.getElementById('image-modal');
    const cards = document.querySelectorAll('.showcase-card');

    if (modal && cards.length > 0) {
        const modalImg = modal.querySelector('.modal-image');
        const modalClose = modal.querySelector('.modal-close');
        const modalOverlay = modal.querySelector('.modal-overlay');

        const openModal = (imgSrc, imgAlt) => {
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt || 'Platform Screenshot';
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            modalClose.focus();
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            setTimeout(() => {
                if (!modal.classList.contains('active')) {
                    modalImg.src = '';
                }
            }, 300);
            document.body.style.overflow = '';
        };

        // Add event listeners to cards
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                if (img) openModal(img.src, img.alt);
            });

            // Enter key to open
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const img = card.querySelector('img');
                    if (img) openModal(img.src, img.alt);
                }
            });
        });

        // Close events
        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

        // Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});
