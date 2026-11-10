/**
 * Portfolio Interactive Scripts
 * Mohammad Tamim - Software & Backend Engineer
 * Features: Dynamic Particle Background, Typewriter, Terminal CLI, Toast System, Project Filters
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  initNavbar();
  initTerminal();
  initProjectFiltering();
  initCopyActions();
  initExpandableTopics();
  initDynamicHydration();
});

/* -----------------------------
   Dynamic Particle Canvas (Interactive Network Mesh)
   ----------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);

  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.color = Math.random() > 0.4 ? '#10b981' : '#06b6d4';
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          this.x -= directionX * force * 3;
          this.y -= directionY * force * 3;
        }
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connection lines
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.22;
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* -----------------------------
   Typewriter Dynamic Role Effect
   ----------------------------- */
function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el || !portfolioData.rotatingRoles) return;

  const roles = portfolioData.rotatingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -----------------------------
   Dynamic Data Hydration
   ----------------------------- */
function initDynamicHydration() {
  if (typeof portfolioData === 'undefined') return;

  const nameElements = document.querySelectorAll('.dynamic-name');
  nameElements.forEach(el => el.textContent = portfolioData.personal.name);

  const emailElements = document.querySelectorAll('.dynamic-email');
  emailElements.forEach(el => {
    el.textContent = portfolioData.links.email;
    if (el.tagName === 'A') el.href = `mailto:${portfolioData.links.email}`;
  });

  const waElements = document.querySelectorAll('.dynamic-whatsapp');
  waElements.forEach(el => {
    el.textContent = portfolioData.links.whatsappNumber;
    if (el.tagName === 'A') el.href = portfolioData.links.whatsapp;
  });

  const cfElements = document.querySelectorAll('.dynamic-cf-handle');
  cfElements.forEach(el => el.textContent = portfolioData.links.codeforcesHandle);

  const gmailLinks = document.querySelectorAll('.link-gmail');
  gmailLinks.forEach(el => {
    el.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.links.email}`;
  });
}

/* -----------------------------
   Navigation Bar & Scrollspy
   ----------------------------- */
function initNavbar() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* -----------------------------
   Interactive Terminal Simulator & 1-Click Pills
   ----------------------------- */
function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');
  const quickPills = document.querySelectorAll('.cmd-pill');
  const history = [];
  let historyIndex = -1;

  if (!terminalInput || !terminalBody) return;

  // Print welcoming banner
  appendOutput("TamimOS v2.4 (x86_64-pc-linux-gnu)\nType 'help' to see available commands or click quick pills above.\n");

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCommand = terminalInput.value.trim();
      const command = rawCommand.toLowerCase();
      terminalInput.value = '';

      if (command) {
        history.push(rawCommand);
        historyIndex = history.length;
        handleCommand(rawCommand, command);
      }
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = history[historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        terminalInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        terminalInput.value = '';
      }
      e.preventDefault();
    }
  });

  // Support 1-click execution for command pills
  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      if (cmd) {
        history.push(cmd);
        historyIndex = history.length;
        handleCommand(cmd, cmd.toLowerCase());
        terminalInput.focus();
      }
    });
  });

  terminalBody.parentElement.addEventListener('click', (e) => {
    if (!e.target.classList.contains('cmd-pill')) {
      terminalInput.focus();
    }
  });

  function handleCommand(raw, cmd) {
    appendPromptLine(raw);
    const commands = portfolioData.terminalCommands || {};

    if (cmd === 'clear') {
      const promptLine = document.getElementById('termPromptLine');
      terminalBody.innerHTML = '';
      terminalBody.appendChild(promptLine);
      return;
    }

    if (cmd === 'date') {
      appendOutput(new Date().toUTCString());
      return;
    }

    if (cmd === 'whoami' || cmd === 'about') {
      appendOutput(`${portfolioData.personal.name} (${portfolioData.personal.fullName})\n${portfolioData.personal.subtitle}\n${portfolioData.personal.bio}`);
      return;
    }

    if (cmd === 'skills') {
      let output = "=== CORE TECHNICAL SKILLS ===\n";
      output += "Languages: " + portfolioData.skills.languages.map(s => s.name).join(', ') + "\n";
      output += "Backend & Systems: REST APIs, System Design, OOP Architecture, DSA\n";
      output += "Databases & Tools: SQL, Git/GitHub, Linux/Bash, VS Code, GCC/MinGW";
      appendOutput(output);
      return;
    }

    if (cmd === 'projects') {
      let output = "=== FEATURED ENGINEERING PROJECTS ===\n";
      portfolioData.projects.forEach((p, idx) => {
        output += `[${idx + 1}] ${p.title}\n    Category: ${p.category.toUpperCase()} | Tech: ${p.tech.join(', ')}\n    GitHub: ${p.github}\n\n`;
      });
      appendOutput(output.trim());
      return;
    }

    if (cmd === 'battleship') {
      appendOutput(commands.battleship || "Battleship 2-Player Game Engine in Java with custom physics & state management.");
      return;
    }

    if (cmd === 'cf' || cmd === 'codeforces') {
      appendOutput(commands.cf || `Codeforces Handle: ${portfolioData.links.codeforcesHandle}\nProfile: ${portfolioData.links.codeforces}`);
      return;
    }

    if (cmd === 'dsa') {
      appendOutput(commands.dsa || "Data Structures & Algorithms (Intermediate) — Binary Trees, Graphs, DP, Complexity Analysis.");
      return;
    }

    if (cmd === 'cpp' || cmd === 'c++') {
      appendOutput(commands.cpp || "C++ Proficiency: Modern STL (vector, map, set, pq), Pointers, OOP & Fast I/O.");
      return;
    }

    if (cmd === 'python') {
      appendOutput(commands.python || "Python Proficiency: Comprehensions, collections module, automation scripting & algorithmic prototyping.");
      return;
    }

    if (cmd === 'java') {
      appendOutput(commands.java || "Java & Battleship Engine: Strict state machine, 10x10 matrix collision, custom Swing particle physics & audio.");
      return;
    }

    if (cmd === 'math' || cmd === 'mathematics') {
      appendOutput(commands.math || "Discrete Mathematics (Mastered), Differential Calculus & Vector Analysis.");
      return;
    }

    if (cmd === 'langs' || cmd === 'languages') {
      appendOutput(commands.langs || "English (Professional), Arabic (Proficient), Bengali (Native).");
      return;
    }

    if (cmd === 'eee' || cmd === 'hardware') {
      appendOutput(commands.eee || "Semiconductor Physics & Electrical Machine Mechanisms.");
      return;
    }

    if (cmd === 'accounting' || cmd === 'accounts') {
      appendOutput(commands.accounting || "Double-entry bookkeeping, debit/credit ledgers, financial statements & transactional integrity.");
      return;
    }

    if (cmd === 'whatsapp') {
      appendOutput(`Connecting to WhatsApp: ${portfolioData.links.whatsappNumber}`);
      window.open(portfolioData.links.whatsapp, '_blank');
      return;
    }

    if (cmd === 'facebook') {
      appendOutput(`Opening Facebook: ${portfolioData.links.facebook}`);
      window.open(portfolioData.links.facebook, '_blank');
      return;
    }

    if (cmd === 'edu' || cmd === 'education') {
      let output = "=== ACADEMIC MILESTONES ===\n";
      portfolioData.education.forEach(e => {
        output += `* ${e.degree} — ${e.institution} (${e.period})\n`;
      });
      appendOutput(output.trim());
      return;
    }

    if (cmd === 'contact') {
      appendOutput(`Contact Channels:\n  Email:      ${portfolioData.links.email}\n  WhatsApp:   ${portfolioData.links.whatsappNumber}\n  GitHub:     ${portfolioData.links.github}\n  Codeforces: ${portfolioData.links.codeforces}\n  Facebook:   ${portfolioData.links.facebook}`);
      return;
    }

    if (cmd === 'github') {
      appendOutput("Opening GitHub: " + portfolioData.links.github);
      window.open(portfolioData.links.github, '_blank');
      return;
    }

    if (cmd.startsWith('curl')) {
      if (cmd.includes('api/tamim') || cmd.includes('api')) {
        appendOutput(commands["curl api/tamim"]);
      } else {
        appendOutput("Usage: curl api/tamim");
      }
      return;
    }

    if (commands[cmd]) {
      appendOutput(commands[cmd]);
      return;
    }

    appendOutput(`bash: command not found: ${raw}. Type 'help' to view valid commands.`);
  }

  function appendPromptLine(cmdText) {
    const promptDiv = document.createElement('div');
    promptDiv.className = 'term-output';
    promptDiv.innerHTML = `<span class="term-prompt-label">tamim@backend:~$</span> <span style="color: #93c5fd;">${escapeHTML(cmdText)}</span>`;
    terminalBody.insertBefore(promptDiv, document.getElementById('termPromptLine'));
  }

  function appendOutput(text) {
    const outDiv = document.createElement('div');
    outDiv.className = 'term-output';
    outDiv.textContent = text;
    terminalBody.insertBefore(outDiv, document.getElementById('termPromptLine'));
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }
}

/* -----------------------------
   Project Category Filtering
   ----------------------------- */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -----------------------------
   Copy Actions & Floating Toast
   ----------------------------- */
function initCopyActions() {
  const toast = document.getElementById('toastNotice');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  const copyEmailBoxes = document.querySelectorAll('.copy-email-trigger');
  copyEmailBoxes.forEach(box => {
    box.addEventListener('click', async () => {
      const email = portfolioData.links.email;
      try {
        await navigator.clipboard.writeText(email);
        showToast("✓ Email address copied to clipboard!");
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  const copyWhatsAppBoxes = document.querySelectorAll('.copy-wa-trigger');
  copyWhatsAppBoxes.forEach(box => {
    box.addEventListener('click', async () => {
      const num = portfolioData.links.whatsappNumber;
      try {
        await navigator.clipboard.writeText(num);
        showToast("✓ WhatsApp number copied to clipboard!");
      } catch (err) {
        window.open(portfolioData.links.whatsapp, '_blank');
      }
    });
  });
}

/* -----------------------------
   Interactive Expandable Topics
   ----------------------------- */
function initExpandableTopics() {
  const toggleButtons = document.querySelectorAll('.expand-toggle-btn');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.skill-card');
      if (!card) return;

      const expandable = card.querySelector('.topic-expandable');
      if (!expandable) return;

      const isExpanded = expandable.classList.contains('expanded');

      if (isExpanded) {
        expandable.classList.remove('expanded');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        expandable.classList.add('expanded');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
