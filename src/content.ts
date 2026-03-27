export type Lang = 'en' | 'es';

export type InstallClient = 'opencode' | 'claudecode' | 'claude' | 'codex' | 'cursor' | 'windsurf' | 'antigravity';

export type Content = {
	nav: { loop: string; activation: string; toolkit: string; compare: string };
	hero: {
		kicker: string;
		title: string;
		subtitle: string;
		primaryCta: string;
		secondaryCta: string;
	};
	loop: { title: string; subtitle: string; steps: string[] };
	activation: {
		title: string;
		subtitle: string;
		quickTitle: string;
		quickSteps: string[];
		copy: string;
		copied: string;
	};
	compare: { title: string; subtitle: string; rows: Array<[string, string, string]> };
	toolkit: { title: string; subtitle: string; tools: Array<{ group: string; items: string[] }> };
	final: { title: string; subtitle: string; appCta: string; mcpCta: string };
	footer: { tagline: string; copy: string };
	links: { app: string; npm: string };
};

export const SETUP_COMMANDS: Record<InstallClient, string> = {
	opencode: 'npx -y fenkit-mcp setup opencode',
	claudecode: 'npx -y fenkit-mcp setup claudecode',
	claude: 'npx -y fenkit-mcp setup claude',
	codex: 'npx -y fenkit-mcp setup codex',
	cursor: 'npx -y fenkit-mcp setup cursor',
	windsurf: 'npx -y fenkit-mcp setup windsurf',
	antigravity: 'npx -y fenkit-mcp setup antigravity'
};

export const GENERAL_SETUP = 'npx -y fenkit-mcp setup <client>';

export const CONTENT: Record<Lang, Content> = {
	en: {
		nav: { loop: 'Loop', activation: 'Activation', toolkit: 'Toolkit', compare: 'Compare' },
		hero: {
			kicker: 'Infrastructure of Done',
			title: 'Build with your agent. Prove it with FENKIT.',
			subtitle:
				'The automated execution layer that bridges the gap between AI assistance and real outcomes. Fenkit MCP reads, builds, and documents tasks automatically—giving your team speed, order, and traceability.',
			primaryCta: 'Run setup command',
			secondaryCta: 'Explore the loop'
		},
		loop: {
			title: 'The Auto-Invoke Success Loop',
			subtitle:
				'Shift to Spec-Driven Development. You define the architecture and validate critical decisions; your agent executes with technical autonomy without losing control or context.',
			steps: [
				'Agent retrieves tasks with full context via list_tasks().',
				'Autonomous implementation based on technical requirements.',
				'Automated documentation of plan and walkthrough evidence.',
				'Real-time task synchronization to FENKIT dashboard.'
			]
		},
		activation: {
			title: 'Activation in 30 seconds',
			subtitle: 'Deploy FENKIT MCP in your favorite AI client with one command.',
			quickTitle: 'Quick Start',
			quickSteps: [
				'Run setup command for your client.',
				'Authenticate and select project.',
				'Start tasks with full synchronized context.'
			],
			copy: 'Copy',
			copied: 'Copied!'
		},
		compare: {
			title: 'The Power of AI Synchronization',
			subtitle:
				'Building with AI today involves too much copy-paste and manual overhead. Transform fragmented assistance into a continuous, actionable workflow.',
			rows: [
				['Context', 'Fragmented and stale', 'Always synchronous'],
				['Documentation', '“I will write it later”', 'Automatic plan + walkthrough'],
				['Visibility', 'Black box execution', 'Live progress and metrics'],
				['Effort', 'High copy-paste overhead', 'Auto-invoke flow']
			]
		},
		toolkit: {
			title: "The Agent's Toolkit",
			subtitle: 'Robust tool groups for autonomous, auditable delivery.',
			tools: [
				{ group: 'Auth', items: ['login', 'get_status'] },
				{ group: 'Projects', items: ['list_projects', 'select_project'] },
				{ group: 'Tasks', items: ['list_tasks', 'get_task_context_compact'] },
				{ group: 'Writing', items: ['update_task_plan', 'update_task_walkthrough'] }
			]
		},
		final: {
			title: 'Build something intelligent.',
			subtitle:
				'Centralized execution. Every task includes automated evidence of the plan, changes, and implementation walkthrough.',
			appCta: 'Explore FENKIT APP',
			mcpCta: 'Install via npm'
		},
		footer: {
			tagline: 'FENKIT MCP: The execution infrastructure for AI-native creators.',
			copy: '© 2026 FENKIT MCP. Built to scale developer productivity.'
		},
		links: {
			app: 'https://fenkit-land.vercel.app',
			npm: 'https://www.npmjs.com/package/fenkit-mcp'
		}
	},
	es: {
		nav: { loop: 'Loop', activation: 'Activación', toolkit: 'Herramientas', compare: 'Comparativa' },
		hero: {
			kicker: 'Infraestructura del Done',
			title: 'Haz que tu IA trabaje. Deja que FENKIT lo refleje.',
			subtitle:
				'La infraestructura que une a los agentes de IA con resultados reales. Fenkit MCP permite que tu agente lea, ejecute y documente tareas automáticamente, ganando velocidad y trazabilidad sin trabajo manual.',
			primaryCta: 'Ejecutar setup',
			secondaryCta: 'Ver el loop'
		},
		loop: {
			title: 'El Loop exitoso del Auto-Invoke',
			subtitle:
				'Hacia un enfoque Spec-Driven Development: tú tienes el control de la arquitectura y validas decisiones críticas, mientras el agente ejecuta con autonomía técnica.',
			steps: [
				'El agente recupera tareas con contexto completo via list_tasks().',
				'Implementación autónoma basada en requerimientos técnicos.',
				'Documentación automática de plan y walkthrough/evidencia.',
				'Sincronización del estado Done en tiempo real.'
			]
		},
		activation: {
			title: 'Activación en 30 segundos',
			subtitle: 'Despliega FENKIT MCP en tu cliente de IA favorito con un solo comando.',
			quickTitle: 'Inicio rápido',
			quickSteps: [
				'Ejecuta el comando setup para tu cliente.',
				'Autentica y selecciona proyecto.',
				'Comienza tareas con contexto sincronizado.'
			],
			copy: 'Copiar',
			copied: '¡Copiado!'
		},
		compare: {
			title: 'El Poder de la Sincronización IA',
			subtitle:
				'Hoy, construir con IA implica demasiado copy-paste. Fenkit elimina esa fricción y transforma la asistencia en un flujo de trabajo continuo, trazable y accionable.',
			rows: [
				['Contexto', 'Fragmentado y desactualizado', 'Siempre sincrónico'],
				['Documentación', '“Luego lo escribo”', 'Plan + walkthrough automático'],
				['Visibilidad', 'Ejecución en caja negra', 'Progreso y métricas en vivo'],
				['Esfuerzo', 'Alto costo de copy-paste', 'Flujo auto-invoke']
			]
		},
		toolkit: {
			title: 'Toolkit del Agente',
			subtitle: 'Grupos de herramientas robustos para entrega autónoma y auditable.',
			tools: [
				{ group: 'Auth', items: ['login', 'get_status'] },
				{ group: 'Proyectos', items: ['list_projects', 'select_project'] },
				{ group: 'Tareas', items: ['list_tasks', 'get_task_context_compact'] },
				{ group: 'Escritura', items: ['update_task_plan', 'update_task_walkthrough'] }
			]
		},
		final: {
			title: 'Construye algo inteligente.',
			subtitle:
				'Control centralizado en FENKIT App. Cada tarea incluye evidencia clara del plan, los cambios y el walkthrough de manera automática.',
			appCta: 'Explorar FENKIT APP',
			mcpCta: 'Instalar vía npm'
		},
		footer: {
			tagline: 'FENKIT MCP: La infraestructura de ejecución para creators AI-native.',
			copy: '© 2026 FENKIT MCP. Construido para escalar la productividad dev.'
		},
		links: {
			app: 'https://fenkit-land.vercel.app',
			npm: 'https://www.npmjs.com/package/fenkit-mcp'
		}
	}
};
