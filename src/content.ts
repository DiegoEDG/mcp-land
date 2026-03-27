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
			title: 'Make your agent build. Let FENKIT prove it.',
			subtitle:
				'The automated task-coordination layer in combination with FENKIT APP that bridges the gap between AI agents and real project outcomes.',
			primaryCta: 'Run setup command',
			secondaryCta: 'Explore the loop'
		},
		loop: {
			title: 'The Auto-Invoke Success Loop',
			subtitle:
				'The developer remains in control while the agent executes. Every step is automatically documented and synced back to the FENKIT dashboard.',
			steps: [
				'Agent calls list_tasks() and receives full context.',
				'Agent executes implementation based on task requirements.',
				'Agent submits update_task_walkthrough() automatically.',
				'Task status is set to Done and synced to backend.'
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
			subtitle: 'Manual tracking is a thing of the past. The MCP loop is operational discipline for modern teams.',
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
			subtitle: 'Use FENKIT APP as command center and MCP as execution infrastructure.',
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
			title: 'Haz que tu agente construya. Deja que FENKIT lo refleje.',
			subtitle:
				'La capa de coordinación de tareas en conjunto con FENKIT APP que une a los agentes de IA con resultados reales. Cero fricción, máximo control y sincronización absoluta.',
			primaryCta: 'Ejecutar setup',
			secondaryCta: 'Ver el loop'
		},
		loop: {
			title: 'El Loop de Éxito Auto-Invoke',
			subtitle:
				'El desarrollador mantiene el control mientras el agente ejecuta. Cada paso se documenta y sincroniza automáticamente en el dashboard de FENKIT.',
			steps: [
				'El agente llama list_tasks() y recibe contexto completo.',
				'El agente implementa según requisitos de la tarea.',
				'El agente envía update_task_walkthrough() automáticamente.',
				'La tarea pasa a Done y se sincroniza al backend.'
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
			subtitle: 'El seguimiento manual es cosa del pasado. El loop MCP es disciplina operativa para equipos modernos.',
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
			subtitle: 'Usa FENKIT APP como centro de mando y MCP como infraestructura de ejecución.',
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
