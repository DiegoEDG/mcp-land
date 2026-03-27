export type Lang = 'en' | 'es'

export type InstallClient =
  | 'opencode'
  | 'claudecode'
  | 'claude'
  | 'codex'
  | 'cursor'
  | 'windsurf'
  | 'antigravity'

export type Content = {
  nav: { loop: string; activation: string; toolkit: string; compare: string }
  hero: {
    kicker: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  loop: { title: string; subtitle: string; steps: string[] }
  activation: {
    title: string
    subtitle: string
    quickTitle: string
    quickSteps: string[]
    copy: string
    copied: string
  }
  compare: { title: string; subtitle: string; rows: Array<[string, string, string]> }
  toolkit: { title: string; subtitle: string; tools: Array<{ group: string; items: string[] }> }
  final: { title: string; subtitle: string; appCta: string; mcpCta: string }
  footer: { tagline: string; copy: string }
}

export const SETUP_COMMANDS: Record<InstallClient, string> = {
  opencode: 'npx -y fenkit-mcp setup opencode',
  claudecode: 'npx -y fenkit-mcp setup claudecode',
  claude: 'npx -y fenkit-mcp setup claude',
  codex: 'npx -y fenkit-mcp setup codex',
  cursor: 'npx -y fenkit-mcp setup cursor',
  windsurf: 'npx -y fenkit-mcp setup windsurf',
  antigravity: 'npx -y fenkit-mcp setup antigravity',
}

export const GENERAL_SETUP = 'npx -y fenkit-mcp setup <client>'

export const CONTENT: Record<Lang, Content> = {
  en: {
    nav: { loop: 'Loop', activation: 'Activation', toolkit: 'Toolkit', compare: 'Compare' },
    hero: {
      kicker: 'Infrastructure of Done',
      title: 'Make your agent build. Let Fenkit prove it.',
      subtitle:
        'Zero friction, maximum control, absolute synchronization between your AI agent and your workflow. MCP-first execution with real evidence.',
      primaryCta: 'Run setup command',
      secondaryCta: 'Explore the loop',
    },
    loop: {
      title: 'The Auto-Invoke Success Loop',
      subtitle:
        'Your agent does not only execute. It documents and syncs every step back to Fenkit in real-time.',
      steps: [
        'Agent calls list_tasks() and receives full context.',
        'Agent executes implementation based on task requirements.',
        'Agent submits update_task_walkthrough() automatically.',
        'Task status is set to Done and synced to backend.',
      ],
    },
    activation: {
      title: 'Activation in 30 seconds',
      subtitle: 'Deploy Fenkit MCP in your favorite AI client with one command.',
      quickTitle: 'Quick Start',
      quickSteps: [
        'Run setup command for your client.',
        'Authenticate and select project.',
        'Start tasks with full synchronized context.',
      ],
      copy: 'Copy',
      copied: 'Copied!',
    },
    compare: {
      title: 'Why Fenkit MCP?',
      subtitle: 'Prompting manually is fragile. The MCP loop is operational discipline.',
      rows: [
        ['Context', 'Fragmented and stale', 'Always synchronous'],
        ['Documentation', '“I will write it later”', 'Automatic plan + walkthrough'],
        ['Visibility', 'Black box execution', 'Live progress and metrics'],
        ['Effort', 'High copy-paste overhead', 'Auto-invoke flow'],
      ],
    },
    toolkit: {
      title: "The Agent's Toolkit",
      subtitle: 'Robust tool groups for autonomous, auditable delivery.',
      tools: [
        { group: 'Auth', items: ['login', 'get_status'] },
        { group: 'Projects', items: ['list_projects', 'select_project'] },
        { group: 'Tasks', items: ['list_tasks', 'get_task_context_compact'] },
        { group: 'Writing', items: ['update_task_plan', 'update_task_walkthrough'] },
      ],
    },
    final: {
      title: 'Build something intelligent.',
      subtitle: 'Use the app as command center and MCP as execution infrastructure.',
      appCta: 'Explore FENKIT App',
      mcpCta: 'Install via npm',
    },
    footer: {
      tagline: 'Fenkit MCP connects your agent to real execution outcomes.',
      copy: '© 2026 FENKIT MCP. Built for AI-native creators.',
    },
  },
  es: {
    nav: { loop: 'Loop', activation: 'Activación', toolkit: 'Herramientas', compare: 'Comparativa' },
    hero: {
      kicker: 'Infraestructura del Done',
      title: 'Haz que tu agente construya. Deja que Fenkit lo demuestre.',
      subtitle:
        'Cero fricción, máximo control y sincronización absoluta entre tu agente de IA y tu flujo de trabajo. Ejecución MCP con evidencia real.',
      primaryCta: 'Ejecutar setup',
      secondaryCta: 'Ver el loop',
    },
    loop: {
      title: 'El Loop de Éxito Auto-Invoke',
      subtitle:
        'Tu agente no solo ejecuta. También documenta y sincroniza cada paso en Fenkit en tiempo real.',
      steps: [
        'El agente llama list_tasks() y recibe contexto completo.',
        'El agente implementa según requisitos de la tarea.',
        'El agente envía update_task_walkthrough() automáticamente.',
        'La tarea pasa a Done y se sincroniza al backend.',
      ],
    },
    activation: {
      title: 'Activación en 30 segundos',
      subtitle: 'Despliega Fenkit MCP en tu cliente de IA favorito con un solo comando.',
      quickTitle: 'Inicio rápido',
      quickSteps: [
        'Ejecuta el comando setup para tu cliente.',
        'Autentica y selecciona proyecto.',
        'Comienza tareas con contexto sincronizado.',
      ],
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    compare: {
      title: '¿Por qué Fenkit MCP?',
      subtitle: 'Promptear manualmente es frágil. El loop MCP es disciplina operativa.',
      rows: [
        ['Contexto', 'Fragmentado y desactualizado', 'Siempre sincrónico'],
        ['Documentación', '“Luego lo escribo”', 'Plan + walkthrough automático'],
        ['Visibilidad', 'Ejecución en caja negra', 'Progreso y métricas en vivo'],
        ['Esfuerzo', 'Alto costo de copy-paste', 'Flujo auto-invoke'],
      ],
    },
    toolkit: {
      title: 'Toolkit del Agente',
      subtitle: 'Grupos de herramientas robustos para entrega autónoma y auditable.',
      tools: [
        { group: 'Auth', items: ['login', 'get_status'] },
        { group: 'Proyectos', items: ['list_projects', 'select_project'] },
        { group: 'Tareas', items: ['list_tasks', 'get_task_context_compact'] },
        { group: 'Escritura', items: ['update_task_plan', 'update_task_walkthrough'] },
      ],
    },
    final: {
      title: 'Construye algo inteligente.',
      subtitle: 'Usa la app como centro de comando y MCP como infraestructura de ejecución.',
      appCta: 'Explorar FENKIT App',
      mcpCta: 'Instalar vía npm',
    },
    footer: {
      tagline: 'Fenkit MCP conecta tu agente con resultados reales de ejecución.',
      copy: '© 2026 FENKIT MCP. Construido para creators AI-native.',
    },
  },
}
