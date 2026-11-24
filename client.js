window.__ModuleLoader__.load({
  id: 'dsh-task-sidebar',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const header = 'conversation.session.header.utilities';
    const namespace = 'taskSidebar';
    const sidebarTab = 'sidebar.right.pane.tab';
    const imageTab = 'dsh-task-sidebar-image';
    const imagePrefix = 'dsh-resource://dsh-task-sidebar/image/';
    const copy = {
      zh: {
        title: '任务面板',
        moved: '任务面板已移至会话右上角。',
        input: '输入',
        inputLoading: '正在读取会话输入…',
        inputEmpty: '本会话暂无附件或 @ 引用的资料。',
        inputMore: '更早的输入可在聊天记录中查看。',
        attachment: '附件',
        imageLoading: '正在加载图片…',
        imageUnavailable: '无法预览，请在原消息中查看图片。',
        imageOpen: '在右侧栏打开图片',
        reference: '引用',
        capability: '技能与连接器',
        capabilityLoading: '正在读取技能与连接器记录…',
        capabilityEmpty: '本会话还没用到技能或连接器。',
        capabilityMore: '仅显示前几项。',
        skill: '技能',
        connector: '连接器',
        skillOpen: '查看技能文档',
        skillOpening: '正在打开…',
        skillUnavailable: '找不到此技能的 Markdown 文档。',
        skillFailed: '暂时无法打开技能文档，请重试。',
        connectorUnavailable: '这段会话没有记录具体工具名。',
        connectorMore: '其余工具可在聊天记录中查看。',
        manageConnectors: '管理连接器',
        manage: '管理',
        closeManager: '关闭连接器管理',
        connectorScope: '更改会影响所有会话。',
        managerLoading: '正在读取连接状态…',
        managerEmpty: '没有可在此管理的连接器。',
        managerFailed: '无法读取实时状态。',
        managerReadOnly: '当前只能查看连接状态。',
        managerSettingsUnavailable: '暂时无法读取连接器设置。',
        managerSettingsLoading: '正在读取连接器设置…',
        managerRetry: '重试',
        managedByPlugin: '由插件提供',
        connect: '连接',
        disconnect: '断开',
        reconnect: '重新连接',
        connectorPending: '处理中…',
        connectorSaved: '连接器设置已保存。',
        connectorRestarted: '已请求重新连接。',
        connectorChanged: '连接器设置已变更，请核对后重试。',
        connectorActionFailed: '操作未能完成，请检查连接器设置后重试。',
        connectorConnected: '已连接',
        connectorConnecting: '连接中',
        connectorReconnecting: '重连中',
        connectorDisabled: '已断开',
        connectorWaiting: '缺少连接凭据',
        connectorFailed: '连接失败',
        connectorClosed: '未连接',
        connectorCleanup: '需要重启 DSH',
        connectorUnknown: '状态未知',
        toolUnit: '个可用工具',
        attention: '待你处理',
        approval: '有一项操作需要你的批准。',
        question: '有一项提问等你回答。',
        review: '有一份计划等你审阅。',
        composerHint: '请在聊天底部的输入区处理。',
        revealQuestion: '查看提问',
        closePanel: '关闭面板',
        output: '输出',
        outputLoading: '正在读取交付记录…',
        outputEmpty: '本会话暂无已交付的文件。',
        outputMore: '更早的交付物可从原回复打开。',
        previewFailed: '无法打开预览。',
        fileUnavailable: '文件不存在或当前会话无法访问。',
        copyPath: '复制路径',
        pathCopied: '已复制路径',
        pathCopyFailed: '无法自动复制，可手动选中下方路径。',
        outsideFolder: '该文件不在当前会话的文件夹内，暂时无法在右侧栏预览。',
        otherSession: '正在编辑的会话已切换，请回到该会话后重试。',
      },
      en: {
        title: 'Task panel',
        moved: 'The task panel is now in the upper-right corner of the conversation.',
        input: 'Inputs',
        inputLoading: 'Loading session inputs…',
        inputEmpty: 'No attachments or @-referenced files in this session yet.',
        inputMore: 'Earlier inputs are available in the conversation.',
        attachment: 'Attachments',
        imageLoading: 'Loading image…',
        imageUnavailable: 'Preview unavailable. Open the image in its original message.',
        imageOpen: 'Open image in right sidebar',
        reference: 'Referenced',
        capability: 'Skills & connectors',
        capabilityLoading: 'Loading skills and connectors…',
        capabilityEmpty: 'No skill or connector used in this session yet.',
        capabilityMore: 'Only the first few are shown.',
        skill: 'Skills',
        connector: 'Connectors',
        skillOpen: 'View skill document',
        skillOpening: 'Opening…',
        skillUnavailable: 'The Markdown document for this skill is unavailable.',
        skillFailed: 'Could not open the skill document. Try again.',
        connectorUnavailable: 'No individual tools were recorded for this connector.',
        connectorMore: 'More tools are listed in the conversation.',
        manageConnectors: 'Manage connectors',
        manage: 'Manage',
        closeManager: 'Close connector management',
        connectorScope: 'Changes affect all sessions.',
        managerLoading: 'Loading connection status…',
        managerEmpty: 'No connectors can be managed here.',
        managerFailed: 'Could not load live status.',
        managerReadOnly: 'Connection status is read-only here.',
        managerSettingsUnavailable: 'Connector settings are unavailable.',
        managerSettingsLoading: 'Loading connector settings…',
        managerRetry: 'Retry',
        managedByPlugin: 'Provided by a plugin',
        connect: 'Connect',
        disconnect: 'Disconnect',
        reconnect: 'Reconnect',
        connectorPending: 'Working…',
        connectorSaved: 'Connector setting saved.',
        connectorRestarted: 'Reconnection requested.',
        connectorChanged: 'Settings changed. Review the current state and try again.',
        connectorActionFailed: 'The action did not complete. Check the connector settings and try again.',
        connectorConnected: 'Connected',
        connectorConnecting: 'Connecting',
        connectorReconnecting: 'Reconnecting',
        connectorDisabled: 'Disconnected',
        connectorWaiting: 'Connection credentials missing',
        connectorFailed: 'Connection failed',
        connectorClosed: 'Not connected',
        connectorCleanup: 'DSH restart required',
        connectorUnknown: 'Unknown status',
        toolUnit: 'available tools',
        attention: 'Your attention needed',
        approval: 'An action is waiting for your approval.',
        question: 'A question is waiting for your answer.',
        review: 'A plan is waiting for your review.',
        composerHint: 'Use the controls above the message box in the chat.',
        revealQuestion: 'View question',
        closePanel: 'Close panel',
        output: 'Outputs',
        outputLoading: 'Loading delivered files…',
        outputEmpty: 'No files delivered in this session yet.',
        outputMore: 'Earlier files are available from their original replies.',
        previewFailed: 'Could not open the preview.',
        fileUnavailable: 'The file is missing or is inaccessible from this session.',
        copyPath: 'Copy path',
        pathCopied: 'Path copied',
        pathCopyFailed: 'Could not copy automatically. Select the path below to copy it manually.',
        outsideFolder: 'This file is outside this session folder, so the right sidebar cannot preview it yet.',
        otherSession: 'The session changed. Switch back to that session and try again.',
      },
    };

    const css = `
      .dsh-task-trigger {
        display: inline-grid; place-items: center; flex: none;
        /* The header utilities row renders the More button after this slot, so
           order moves the trigger to its right, beside the sidebar toggle. */
        order: 1;
        inline-size: 28px; block-size: 28px; padding: 0; border: 0;
        border-radius: var(--dsw-radius-sm); background: transparent;
        color: var(--dsw-alias-label-secondary); cursor: pointer;
      }
      .dsh-task-trigger:hover, .dsh-task-trigger[aria-expanded="true"] {
        background: var(--dsw-alias-interactive-bg-hover); color: var(--dsw-alias-label-primary);
      }
      .dsh-task-trigger, .dsh-task-panel { -webkit-app-region: no-drag; app-region: no-drag; }
      .dsh-task-trigger:focus-visible, .dsh-task-panel :is(button, summary):focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -2px;
      }
      .dsh-task-trigger .task-trigger-mark {
        display: grid; grid-template-columns: 4px 7px; grid-template-rows: repeat(3, 3px);
        place-content: center; place-items: center; gap: 2px 3px;
        inline-size: 17px; block-size: 16px;
      }
      .dsh-task-trigger .task-trigger-mark i:nth-child(odd) {
        inline-size: 3px; block-size: 3px; border-radius: 50%; background: currentColor;
      }
      .dsh-task-trigger .task-trigger-mark i:nth-child(even) {
        inline-size: 7px; block-size: 1.5px; border-radius: 1px; background: currentColor;
      }
      .dsh-task-panel {
        display: none; position: fixed; box-sizing: border-box;
        /* Slides out from the chat column's right edge over the transcript, so it never
           covers the right panel. Fallback only: the real offset is measured on open. */
        inset: max(54px, calc(var(--dsh-frame-overlay-top, 0px) + 46px)) 8px auto auto;
        width: min(340px, calc(100vw - 24px));
        max-height: min(430px, 70dvh, calc(100dvh - var(--dsh-frame-overlay-top, 0px) - 66px));
        margin: 0; padding: 4px 13px; overflow: auto; overscroll-behavior: contain;
        border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-lg);
        /* The theme menu tint can be semi-transparent; stack it over opaque raised surfaces
           so transcript text never bleeds through the panel. */
        background-color: var(--dsw-alias-bg-base, #1b1c1d);
        background-image:
          linear-gradient(var(--dsw-specific-menu, transparent), var(--dsw-specific-menu, transparent)),
          linear-gradient(var(--dsw-alias-bg-layer-1, transparent), var(--dsw-alias-bg-layer-1, transparent));
        backdrop-filter: var(--dsw-menu-backdrop-filter, blur(18px) saturate(1.3));
        --dsw-elevation-stroke-color: var(--dsw-alias-border-l1);
        box-shadow: var(--dsw-elevation-prominent);
        color: var(--dsw-alias-label-primary);
        font-size: var(--dsh-content-font-size-secondary, 13px); line-height: 1.5;
      }
      .dsh-task-panel:popover-open { display: block; }
      /* Sections are collapsed <details>, so sibling combinators only caught the first one;
         every group carries its own rule, and the very first child needs none. */
      .dsh-task-panel .task-attention { margin-block-end: 2px; }
      .dsh-task-panel .task-attention + .task-section { border-top: 1px solid var(--dsw-alias-border-l2); }
      .dsh-task-panel .task-section { border-top: 1px solid var(--dsw-alias-border-l2); }
      .dsh-task-panel > :first-child { border-top: 0; }
      .dsh-task-panel .task-heading {
        display: flex; align-items: center; gap: 8px; min-block-size: 34px;
        cursor: pointer; list-style: none; font-weight: 600; border-radius: var(--dsw-radius-sm);
      }
      .dsh-task-panel .task-heading::-webkit-details-marker { display: none; }
      .dsh-task-panel .task-title {
        margin-inline-end: auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .dsh-task-panel .task-chevron {
        inline-size: 6px; block-size: 6px; flex: none; margin-inline-start: 2px;
        border-inline-end: 1px solid currentColor; border-block-end: 1px solid currentColor;
        color: var(--dsw-alias-label-secondary); transform: rotate(-45deg); opacity: 0;
      }
      .dsh-task-panel .task-section[open] > .task-heading > .task-chevron { transform: rotate(45deg); }
      @media (hover: hover) {
        .dsh-task-panel .task-heading:hover > .task-chevron { opacity: 1; }
      }
      .dsh-task-panel .task-count {
        color: var(--dsw-alias-label-secondary);
        font-size: 12px; font-weight: 400; font-variant-numeric: tabular-nums;
        opacity: 0; transition: opacity 120ms;
      }
      .dsh-task-panel .task-heading:hover > .task-count,
      .dsh-task-panel .task-heading:focus-visible > .task-count { opacity: 1; }
      .dsh-task-panel .task-group-count { opacity: 0; transition: opacity 120ms; }
      .dsh-task-panel .task-group:hover .task-group-count { opacity: 1; }
      @media (hover: none) {
        .dsh-task-panel .task-count,
        .dsh-task-panel .task-group-count { opacity: 1; }
      }
      .dsh-task-panel .task-body { padding-block: 0 8px; }
      .dsh-task-panel .task-list { padding: 0; margin: 0; list-style: none; }
      .dsh-task-panel .task-attention { padding: 6px 0 8px; overflow-wrap: anywhere; }
      .dsh-task-panel .task-attention-title { font-weight: 600; color: var(--dsw-alias-state-warn-primary); }
      .dsh-task-panel .task-muted { margin: 0; color: var(--dsw-alias-label-secondary); font-size: 12px; }
      .dsh-task-panel .task-attention .task-muted { margin-block-start: 2px; }
      .dsh-task-panel .task-return {
        margin-block-start: 4px; padding: 2px 0; border: 0; background: none;
        color: var(--dsw-alias-brand-primary); font: inherit; cursor: pointer;
      }
      .dsh-task-panel .task-return:hover { text-decoration: underline; }
      .dsh-task-panel .task-file {
        display: grid; grid-template-columns: 16px minmax(0, 1fr) 12px; align-items: start;
        gap: 8px; inline-size: 100%; min-block-size: 30px; text-align: start;
        padding: 5px; border: 0; border-radius: var(--dsw-radius-sm); background: transparent;
        color: inherit; font: inherit; cursor: pointer;
      }
      .dsh-task-panel .task-file:hover { background: var(--dsw-alias-interactive-bg-hover); }
      .dsh-task-panel .task-file svg { margin-block-start: 2px; color: var(--dsw-alias-label-secondary); }
      .dsh-task-panel .task-input-row {
        display: grid; grid-template-columns: 16px minmax(0, 1fr); align-items: start;
        gap: 8px; min-block-size: 30px; padding: 5px;
      }
      .dsh-task-panel .task-input-row svg { margin-block-start: 2px; color: var(--dsw-alias-label-secondary); }
      .dsh-task-panel .task-detail-heading {
        grid-template-columns: 16px minmax(0, 1fr) auto 8px;
        align-items: center; cursor: pointer; list-style: none;
        border-radius: var(--dsw-radius-sm);
      }
      .dsh-task-panel .task-detail-heading::-webkit-details-marker { display: none; }
      .dsh-task-panel .task-detail-heading:hover { background: var(--dsw-alias-interactive-bg-hover); }
      .dsh-task-panel .task-detail-heading > svg { margin-block-start: 0; }
      .dsh-task-panel .task-detail-heading > .task-chevron { grid-column: 4; }
      .dsh-task-panel .task-item-detail[open] > .task-detail-heading > .task-chevron { transform: rotate(45deg); }
      @media (hover: hover) {
        .dsh-task-panel .task-detail-heading:hover > .task-chevron { opacity: 1; }
      }
      .dsh-task-panel .task-detail-heading:focus-visible > .task-chevron { opacity: 1; }
      @media (hover: none) {
        .dsh-task-panel .task-detail-heading > .task-chevron { opacity: 1; }
      }
      .dsh-task-panel .task-detail-body { margin-inline-start: 29px; padding: 2px 5px 7px 0; overflow-wrap: anywhere; }
      .dsh-task-panel .task-detail-body > :not(:first-child) { margin-block-start: 4px; }
      .dsh-task-panel .task-detail-list { padding: 0; margin: 0; list-style: none; }
      .dsh-task-panel .task-detail-list li {
        display: flex; align-items: baseline; justify-content: space-between; gap: 8px;
        padding-block: 1px; overflow-wrap: anywhere;
      }
      .dsh-task-panel .task-detail-list li > span:first-child { min-width: 0; }
      .dsh-task-panel .task-skill-link {
        padding: 2px 0; border: 0; background: transparent; font: inherit;
        font-size: 12px; color: var(--dsw-alias-brand-primary); cursor: pointer;
      }
      .dsh-task-panel .task-skill-link:hover, .dsh-task-panel .task-skill-link:focus-visible { text-decoration: underline; }
      .dsh-task-panel .task-skill-link:disabled { color: var(--dsw-alias-label-secondary); cursor: progress; }
      .dsh-task-panel .task-image-preview {
        display: block; max-inline-size: 100%; max-block-size: min(258px, 40dvh);
        object-fit: contain; border-radius: var(--dsw-radius-sm);
      }
      .dsh-task-panel .task-image-open {
        display: grid; justify-items: start; gap: 4px; max-inline-size: 100%;
        padding: 0; border: 0; border-radius: var(--dsw-radius-sm);
        background: transparent; color: inherit; font: inherit; text-align: start; cursor: pointer;
      }
      .dsh-task-panel .task-image-open:hover .task-muted,
      .dsh-task-panel .task-image-open:focus-visible .task-muted { color: var(--dsw-alias-label-primary); }
      .dsh-task-panel .task-group {
        margin: 4px 0 1px; color: var(--dsw-alias-label-secondary);
        font-size: 11px; font-weight: 600; letter-spacing: 0.02em;
      }
      .dsh-task-panel .task-group + .task-list { margin-block-start: 0; }
      .dsh-task-panel .task-connector-group {
        display: flex; justify-content: space-between; align-items: center; gap: 8px;
      }
      .dsh-task-panel .task-manage-link { padding: 4px 5px; }
      .dsh-task-panel .task-connector-dialog {
        box-sizing: border-box; inline-size: min(440px, calc(100vw - 32px));
        max-block-size: min(540px, calc(100dvh - 64px)); margin: auto;
        padding: 14px 16px 16px; overflow: auto; overscroll-behavior: contain;
        border: 1px solid var(--dsw-alias-border-l1); border-radius: var(--dsw-radius-lg);
        /* Opaque surface: the menu tint alone can let transcript text show through. */
        background-color: var(--dsw-alias-bg-base, #1b1c1d);
        background-image:
          linear-gradient(var(--dsw-specific-menu, transparent), var(--dsw-specific-menu, transparent)),
          linear-gradient(var(--dsw-alias-bg-layer-1, transparent), var(--dsw-alias-bg-layer-1, transparent));
        color: var(--dsw-alias-label-primary);
        box-shadow: var(--dsw-elevation-prominent, 0 12px 32px rgb(0 0 0 / 0.35)); font: inherit;
      }
      .dsh-task-panel .task-connector-dialog::backdrop { background: var(--dsw-alias-mask, rgb(0 0 0 / 0.35)); }
      .dsh-task-panel .task-manager-heading {
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
      }
      .dsh-task-panel .task-manager-title { margin: 0; font-size: 15px; font-weight: 600; }
      .dsh-task-panel .task-manager-close, .dsh-task-panel .task-manager-action {
        min-block-size: 28px; padding: 3px 9px; border: 0;
        border-radius: var(--dsw-radius-sm); background: var(--dsw-alias-interactive-bg-hover);
        color: inherit; font: inherit; font-size: 12px; white-space: nowrap; cursor: pointer;
      }
      .dsh-task-panel .task-manager-close { background: transparent; font-size: 16px; }
      .dsh-task-panel .task-manager-close:hover, .dsh-task-panel .task-manager-action:hover {
        background: var(--dsw-alias-interactive-bg-hover);
      }
      .dsh-task-panel .task-manager-action[aria-disabled="true"] {
        color: var(--dsw-alias-label-secondary); cursor: default;
      }
      .dsh-task-panel .task-manager-list { margin-block-start: 10px; }
      .dsh-task-panel .task-manager-row {
        display: grid; grid-template-columns: 16px minmax(0, 1fr) auto;
        align-items: center; gap: 8px; padding-block: 8px;
        border-block-start: 1px solid var(--dsw-alias-border-l2);
      }
      .dsh-task-panel .task-manager-row > svg { color: var(--dsw-alias-label-secondary); }
      .dsh-task-panel .task-manager-name { font-weight: 600; overflow-wrap: anywhere; }
      .dsh-task-panel .task-manager-status { overflow-wrap: anywhere; }
      .dsh-task-panel .task-manager-notice { margin-block-start: 8px; }
      .dsh-task-panel .task-manager-notice[role="alert"] { color: var(--dsw-alias-state-warn-primary); }
      .dsh-task-panel .task-filename, .dsh-task-panel .task-description {
        display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      .dsh-task-panel .task-description { color: var(--dsw-alias-label-secondary); font-size: 12px; }
      .dsh-task-panel .task-file-arrow { color: var(--dsw-alias-label-secondary); opacity: 0; }
      .dsh-task-panel .task-file:hover .task-file-arrow,
      .dsh-task-panel .task-file:focus-visible .task-file-arrow { opacity: 1; }
      .dsh-task-panel .task-note { margin-block-start: 5px; }
    `;

    function FileIcon() {
      return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.1, strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: 'M4 1.8h4.7L12.5 5v8a1.2 1.2 0 0 1-1.2 1.2H4A1.2 1.2 0 0 1 2.8 13V3A1.2 1.2 0 0 1 4 1.8Z' }),
      h('path', { d: 'M8.5 1.8V5h4' }));
    }

    function ImageIcon() {
      return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.1, strokeLinejoin: 'round', 'aria-hidden': true },
      h('rect', { x: 2.2, y: 3.2, width: 11.6, height: 9.6, rx: 1.4 }),
      h('circle', { cx: 5.9, cy: 6.6, r: 1 }),
      h('path', { d: 'M3.4 11.6 6.9 8.4l2.1 1.9 1.9-1.6 2 2' }));
    }

    function LinkIcon() {
      return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.1, strokeLinecap: 'round', 'aria-hidden': true },
      h('path', { d: 'M6.6 9.4 9.4 6.6' }),
      h('path', { d: 'M7.9 4.4 9 3.3a2.2 2.2 0 0 1 3.1 3.1l-1.1 1.1' }),
      h('path', { d: 'M8.1 11.6 7 12.7a2.2 2.2 0 0 1-3.1-3.1l1.1-1.1' }));
    }

    function SkillIcon() {
      return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.1, strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: 'M8 2.4 9.6 5.7l3.6.5-2.6 2.5.6 3.6L8 10.6l-3.2 1.7.6-3.6L2.8 6.2l3.6-.5z' }));
    }

    function PlugIcon() {
      return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none',
        stroke: 'currentColor', strokeWidth: 1.1, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
      h('path', { d: 'M6.2 2.6v2.2M9.8 2.6v2.2' }),
      h('path', { d: 'M4.6 4.8h6.8v2.4a3.4 3.4 0 0 1-6.8 0z' }),
      h('path', { d: 'M8 10.6v2.8' }));
    }

    function Section({ label, count, children }) {
      // Every group starts collapsed: the panel opens as a compact overview.
      const [expanded, setExpanded] = React.useState(false);
      return h('details', {
        className: 'task-section', open: expanded,
        onToggle: event => {
          if (event.target === event.currentTarget) setExpanded(event.currentTarget.open);
        },
      },
        h('summary', { className: 'task-heading' },
          h('span', { className: 'task-title' }, label),
          count && h('span', { className: 'task-count' }, count),
          h('span', { className: 'task-chevron', 'aria-hidden': true })),
        expanded && h('div', { className: 'task-body' }, children));
    }

    function ItemDetails({ name, icon, meta, children }) {
      const [expanded, setExpanded] = React.useState(false);
      return h('details', {
        className: 'task-item-detail', open: expanded,
        onToggle: event => {
          if (event.target === event.currentTarget) setExpanded(event.currentTarget.open);
        },
      },
        h('summary', { className: 'task-input-row task-detail-heading', title: name },
          h(icon),
          h('span', null,
            h('span', { className: 'task-filename' }, name),
            meta && h('span', { className: 'task-description' }, meta)),
          h('span', { className: 'task-chevron', 'aria-hidden': true })),
        expanded && h('div', { className: 'task-detail-body' }, children));
    }

    function fileAddress(sessionId, cwd, path) {
      // Match the session-scoped file addresses used by the native preview.
      const normalize = value => value.replace(/\\/g, '/');
      const root = typeof cwd === 'string' ? normalize(cwd).replace(/\/+$/, '') : '';
      const normalized = normalize(path);
      const local = root && normalized.startsWith(`${root}/`) ? normalized.slice(root.length + 1) : normalized;
      const encode = value => encodeURIComponent(value).replace(/%3A/gi, ':');
      return `dsh-resource://file/session/${encode(sessionId)}/${local.replace(/^(?:\.\/)+/, '').split('/').map(encode).join('/')}`;
    }

    function imageAddress(sessionId, item) {
      const label = new URLSearchParams({ name: item.name });
      return `${imagePrefix}${encodeURIComponent(sessionId)}/${encodeURIComponent(item.imageRef.attachmentId)}?${label}`;
    }

    function parseImageAddress(address) {
      if (!address?.startsWith(imagePrefix)) return;
      const [path, search] = address.slice(imagePrefix.length).split('?');
      const parts = path.split('/');
      if (parts.length !== 2 || !parts.every(Boolean)) return;
      try {
        const [sessionId, attachmentId] = parts.map(decodeURIComponent);
        const name = new URLSearchParams(search).get('name') || 'Image';
        return { sessionId, attachmentId, name };
      } catch {
        return;
      }
    }

    // Slide out from the chat column's right edge, over the transcript: the panel stays inside
    // the conversation area and never covers the right panel.
    function panelPlacement(trigger) {
      // Anchor on the chat column's right edge: the header corner (where the sidebar toggle
      // sits) ends exactly at that edge. The right panel element keeps stale geometry when
      // collapsed, so it is never measured here.
      const triggerRect = trigger?.getBoundingClientRect?.();
      const viewport = window.innerWidth;
      const corner = document.querySelector('[data-conversation-header-corner]')?.getBoundingClientRect?.();
      const edge = corner && corner.right > 0 && corner.right < viewport
        ? Math.round(corner.right)
        : Math.round(triggerRect?.right ?? viewport);
      const right = Math.max(8, viewport - edge);
      const width = Math.max(240, Math.min(340, edge - 24));
      return { right, top: triggerRect ? Math.round(triggerRect.bottom + 8) : undefined, width };
    }

    function attentionOf(interaction, t) {
      if (interaction?.kind === 'approval' && interaction.answerable) return t('approval');
      if (!interaction || interaction.review !== undefined || interaction.getSnapshot?.()?.closed) return undefined;
      if (interaction.kind === 'plan-review') return t('review');
      if (interaction.kind === 'question') return interaction.questions?.[0]?.question || t('question');
      return undefined;
    }

    function formatBytes(bytes) {
      if (!Number.isSafeInteger(bytes) || bytes < 0) return '';
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    function ImagePreview({ attachment, name, loadImage, t, open }) {
      const [url, setUrl] = React.useState();
      const [failed, setFailed] = React.useState(false);
      const [openFailure, setOpenFailure] = React.useState();
      React.useEffect(() => {
        let active = true;
        let objectUrl;
        setUrl(undefined);
        setFailed(false);
        if (!attachment) {
          setFailed(true);
          return;
        }
        async function read() {
          try {
            const result = await loadImage(attachment);
            if (!active) return;
            if (!result?.ok) { setFailed(true); return; }
            const { data, attachment: ref } = result.value;
            objectUrl = URL.createObjectURL(new Blob([data], { type: ref.mediaType }));
            setUrl(objectUrl);
          } catch {
            if (active) setFailed(true);
          }
        }
        void read();
        return () => {
          active = false;
          if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
      }, [attachment, loadImage]);
      if (failed) return h('p', { className: 'task-muted', role: 'status' }, t('imageUnavailable'));
      if (!url) return h('p', { className: 'task-muted', role: 'status' }, t('imageLoading'));
      const image = h('img', { className: 'task-image-preview', src: url, alt: name,
        decoding: 'async', onError: () => setFailed(true) });
      if (!open) return image;
      return h(React.Fragment, null,
        h('button', { className: 'task-image-open', type: 'button', onClick: () => setOpenFailure(open()),
          'aria-label': `${t('imageOpen')} · ${name}` },
          image, h('span', { className: 'task-muted' }, `${t('imageOpen')} ↗`)),
        openFailure && h('p', { className: 'task-muted', role: 'status' }, t(openFailure)));
    }

    function FileRow({ icon: Icon, name, meta, path, open, t }) {
      const [note, setNote] = React.useState();
      const [copyState, setCopyState] = React.useState();
      const [busy, setBusy] = React.useState(false);
      const noteId = React.useId();

      async function activate(event) {
        if (busy) return;
        setBusy(true);
        setNote(undefined);
        setCopyState(undefined);
        try {
          setNote(await open(event.currentTarget));
        } catch {
          setNote('previewFailed');
        } finally {
          setBusy(false);
        }
      }

      async function copyPath(event) {
        try {
          await event.currentTarget.ownerDocument.defaultView.navigator.clipboard.writeText(path);
          setCopyState('pathCopied');
        } catch {
          setCopyState('pathCopyFailed');
        }
      }

      return h('li', null,
        h('button', { className: 'task-file', type: 'button', title: path,
          'aria-describedby': note ? noteId : undefined, 'aria-disabled': busy || undefined,
          onClick: activate },
          h(Icon), h('span', null, h('span', { className: 'task-filename' }, name),
            meta && h('span', { className: 'task-description' }, meta)),
          h('span', { className: 'task-file-arrow', 'aria-hidden': true }, '↗')),
        note && h('div', { className: 'task-detail-body' },
          h('p', { id: noteId, className: 'task-muted', role: 'status' }, t(note)),
          path && h('button', { type: 'button', className: 'task-skill-link', onClick: copyPath }, t('copyPath')),
          copyState && h('p', { className: 'task-muted', role: 'status' }, t(copyState)),
          copyState === 'pathCopyFailed' && h('code', { style: { userSelect: 'text' } }, path)));
    }

    function Inputs({ value, openFile, openImage, loadImage, t }) {
      const attachments = value?.attachments ?? [];
      const references = value?.references ?? [];
      const total = attachments.length + references.length;
      const more = Boolean(value?.moreAttachments || value?.moreReferences);
      const group = (label, count) => h('p', { className: 'task-group' },
        h('span', null, label), h('span', { className: 'task-group-count' }, ` · ${count}`));
      return h(Section, { label: t('input'), count: total ? `${total}${more ? '+' : ''}` : undefined },
        !value && h('p', { className: 'task-muted' }, t('inputLoading')),
        value && !total && h('p', { className: 'task-muted' }, t('inputEmpty')),
        attachments.length > 0 && group(t('attachment'), attachments.length),
        attachments.length > 0 && h('ul', { className: 'task-list' }, attachments.map((item, index) => {
          const meta = [
            item.width && item.height ? `${item.width}×${item.height}` : '',
            formatBytes(item.bytes),
          ].filter(Boolean).join(' · ');
          const key = item.key ?? `${item.kind}:${index}:${item.name}`;
          return item.kind === 'image'
            ? h('li', { key }, h(ItemDetails, { name: item.name, icon: ImageIcon, meta },
                h(ImagePreview, { attachment: item.imageRef, name: item.name, loadImage, t,
                  open: item.imageRef ? () => openImage(item) : undefined })))
            : h('li', { key, className: 'task-input-row', title: item.name },
                h(FileIcon), h('span', null, h('span', { className: 'task-filename' }, item.name),
                  meta && h('span', { className: 'task-description' }, meta)));
        })),
        references.length > 0 && group(t('reference'), references.length),
        references.length > 0 && h('ul', { className: 'task-list' }, references.map(item =>
          h(FileRow, { key: item.path, icon: LinkIcon, name: item.path, path: item.path,
            open: trigger => openFile(item.path, trigger), t }))),
        more && h('p', { className: 'task-muted task-note' }, t('inputMore')));
    }

    function connectorSettings(view) {
      const entry = view.namespaces.find(row => row.ns === 'mcp-manager');
      if (!entry) return null;
      const servers = entry.value?.servers;
      return {
        revision: entry.revision,
        writable: view.writable && Number.isSafeInteger(entry.revision),
        configured: new Map(Object.entries(servers ?? {}).map(([name, config]) => [name, config.enabled !== false])),
      };
    }

    function connectorStatus(status) {
      switch (status.state) {
        case 'connected': return 'connectorConnected';
        case 'connecting': return 'connectorConnecting';
        case 'reconnecting': return 'connectorReconnecting';
        case 'disabled': return 'connectorDisabled';
        case 'waiting-credentials': return 'connectorWaiting';
        case 'closed': return 'connectorClosed';
        case 'failed': return status.reason === 'cleanup' || status.reason === 'unclosed-generation'
          ? 'connectorCleanup' : 'connectorFailed';
        default: return 'connectorUnknown';
      }
    }

    function Capabilities({ value, openSkill, skillRequest, openManager, t }) {
      const skills = value?.skills ?? [];
      const connectors = value?.connectors ?? [];
      const total = skills.length + connectors.length;
      const more = Boolean(value?.moreSkills || value?.moreConnectors);
      const group = (label, count) => h('p', { className: 'task-group' },
        h('span', null, label), h('span', { className: 'task-group-count' }, ` · ${count}`));
      const rows = (items, icon, renderDetails) => h('ul', { className: 'task-list' }, items.map(item =>
        h('li', { key: item.name }, h(ItemDetails, { name: item.name, icon }, renderDetails(item)))));
      const skillDetails = item => {
        const status = skillRequest?.name === item.name ? skillRequest.status : undefined;
        const opening = status === 'skillOpening';
        return h(React.Fragment, null,
          item.description && h('p', { className: 'task-muted' }, item.description),
          h('button', { className: 'task-skill-link', type: 'button', disabled: opening,
            onClick: () => void openSkill(item.name),
            'aria-label': `${t(opening ? 'skillOpening' : 'skillOpen')} · ${item.name}` },
            opening ? t('skillOpening') : `${t('skillOpen')} ↗`),
          status && !opening && h('p', { className: 'task-muted', role: 'status' }, t(status)));
      };
      const connectorDetails = item => item.tools?.length
        ? h(React.Fragment, null,
            h('ul', { className: 'task-detail-list' }, item.tools.map(tool =>
              h('li', { key: tool.name }, h('span', null, tool.name)))),
            item.moreTools && h('p', { className: 'task-muted' }, t('connectorMore')))
        : h('p', { className: 'task-muted' }, t('connectorUnavailable'));
      return h(Section, { label: t('capability'), count: total ? `${total}${more ? '+' : ''}` : undefined },
        !value && h('p', { className: 'task-muted' }, t('capabilityLoading')),
        value && !total && h('p', { className: 'task-muted' }, t('capabilityEmpty')),
        skills.length > 0 && group(t('skill'), skills.length),
        skills.length > 0 && rows(skills, SkillIcon, skillDetails),
        (openManager || connectors.length > 0) && h('div', { className: 'task-group task-connector-group' },
          connectors.length
            ? h('span', null, h('span', null, t('connector')),
                h('span', { className: 'task-group-count' }, ` · ${connectors.length}`))
            : h('span', null, t('connector')),
          openManager && h('button', { className: 'task-skill-link task-manage-link', type: 'button',
            'aria-label': t('manageConnectors'), 'aria-haspopup': 'dialog', onClick: openManager }, t('manage'))),
        connectors.length > 0 && rows(connectors, PlugIcon, connectorDetails),
        more && h('p', { className: 'task-muted task-note' }, t('capabilityMore')));
    }

    function Outputs({ value, openFile, t }) {
      const files = value?.files ?? [];
      return h(Section, { label: t('output'), count: files.length ? `${files.length}${value.more ? '+' : ''}` : undefined },
        !value && h('p', { className: 'task-muted' }, t('outputLoading')),
        value && !files.length && h('p', { className: 'task-muted' }, t('outputEmpty')),
        files.length > 0 && h('ul', { className: 'task-list' }, files.map(file => {
          const name = file.path.split(/[/\\]/).pop() || file.path;
          return h(FileRow, { key: file.path, icon: FileIcon, name, path: file.path,
            meta: file.description, open: trigger => openFile(file.path, trigger), t });
        })),
        value?.more && h('p', { className: 'task-muted task-note' }, t('outputMore')));
    }

    return {
      inject: ['slots', 'locale', 'sidebarRight', 'sidebarRightTabs', 'sessions', 'uiSession', 'remote', 'remote.skills'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(namespace, copy));
        ctx.effect(() => ctx.sidebarRightTabs.register({
          id: imageTab, kind: imageTab, patterns: [`${imagePrefix}**`],
          canOpen: address => Boolean(parseImageAddress(address)),
          title: address => parseImageAddress(address)?.name ?? 'Image',
        }));

        function ConnectorManager({ dialog, t, canDescribe, canMutate, canRestart, isOpen }) {
          const [rows, setRows] = React.useState(null);
          const [streamFailed, setStreamFailed] = React.useState(false);
          const [settings, setSettings] = React.useState();
          const [attempt, setAttempt] = React.useState(0);
          const [pending, setPending] = React.useState(null);
          const [notice, setNotice] = React.useState(null);
          const settingsRead = React.useRef(null);
          const operation = React.useRef(false);

          const refreshSettings = React.useCallback(async signal => {
            if (!canDescribe) return;
            try {
              const result = await ctx.get('remote.settings')?.describe();
              if (!signal.aborted) setSettings(result?.ok ? connectorSettings(result.value) : null);
            } catch {
              if (!signal.aborted) setSettings(null);
            }
          }, [canDescribe]);

          React.useEffect(() => {
            const controller = new AbortController();
            settingsRead.current = controller;
            setSettings(undefined);
            void refreshSettings(controller.signal);
            return () => controller.abort();
          }, [attempt, refreshSettings]);

          React.useEffect(() => {
            const controller = new AbortController();
            const { signal } = controller;
            setRows(null);
            setStreamFailed(false);
            async function follow() {
              try {
                const manager = ctx.get('remote.mcpManager');
                if (!manager) throw new Error('MCP manager unavailable');
                for await (const snapshot of manager.watch(signal)) {
                  if (signal.aborted) break;
                  setRows(snapshot);
                }
              } catch {
                // The stream can end on connection resets, too. Retry opens a fresh stream.
              }
              if (!signal.aborted) setStreamFailed(true);
            }
            void follow();
            return () => controller.abort();
          }, [attempt]);

          async function run(name, action) {
            if (operation.current || streamFailed || !isOpen() || !dialog.current?.open) return;
            const signal = settingsRead.current?.signal;
            if (action === 'reconnect' ? !canRestart : !signal || signal.aborted || !settings?.writable || !canMutate) return;
            operation.current = true;
            setPending(name);
            setNotice(null);
            const stillOpen = () => dialog.current?.open && isOpen();
            try {
              if (action === 'reconnect') {
                const result = await ctx.get('remote.mcpManager')?.restart(name);
                if (stillOpen()) setNotice(result?.ok ? 'connectorRestarted' : 'connectorActionFailed');
              } else {
                const settingsRemote = ctx.get('remote.settings');
                if (!settingsRemote) throw new Error('Settings unavailable');
                const result = await settingsRemote.mutate('mcp-manager', [
                  { op: 'set', path: ['servers', name, 'enabled'], value: action === 'connect' },
                ], settings.revision);
                if (!stillOpen() || signal.aborted) return;
                if (result.ok) {
                  setSettings(connectorSettings({ writable: settings.writable, namespaces: [result.value] }));
                  setNotice('connectorSaved');
                } else {
                  setSettings(null);
                  setNotice(result.error.code === 'settings/conflict' ? 'connectorChanged' : 'connectorActionFailed');
                  await refreshSettings(signal);
                }
              }
            } catch {
              if (stillOpen() && (action === 'reconnect' || !signal.aborted)) {
                setNotice('connectorActionFailed');
                if (action !== 'reconnect') {
                  setSettings(null);
                  await refreshSettings(signal);
                }
              }
            } finally {
              operation.current = null;
              if (stillOpen()) setPending(null);
            }
          }

          function renderRow({ name, configured, status }) {
            const state = connectorStatus(status);
            const enabled = settings?.configured.get(name);
            const fromPlugin = configured && settings && enabled === undefined;
            let action;
            if (configured && state !== 'connectorCleanup') {
              if (enabled !== undefined && settings.writable && canMutate) action = enabled ? 'disconnect' : 'connect';
              else if (fromPlugin && canRestart && status.state !== 'connecting' && status.state !== 'reconnecting') action = 'reconnect';
            }
            const busy = pending === name;
            const blocked = Boolean(pending) || streamFailed;
            const toolCount = status.state === 'connected' && Number.isSafeInteger(status.toolCount)
              ? ` · ${status.toolCount} ${t('toolUnit')}` : '';
            return h('li', { key: name, className: 'task-manager-row' },
              h(PlugIcon),
              h('div', null, h('div', { className: 'task-manager-name' }, name),
                h('div', { className: 'task-muted task-manager-status' },
                  `${t(state)}${toolCount}${fromPlugin ? ` · ${t('managedByPlugin')}` : ''}`)),
              (action || busy) && h('button', { type: 'button', className: 'task-manager-action',
                'aria-disabled': blocked, 'aria-label': `${t(busy ? 'connectorPending' : action)} · ${name}`,
                onClick: () => { if (!blocked && action) void run(name, action); } },
              t(busy ? 'connectorPending' : action)));
          }

          const retry = () => {
            if (operation.current) return;
            setNotice(null);
            setAttempt(value => value + 1);
          };
          const alert = notice === 'connectorActionFailed' || notice === 'connectorChanged';
          return h(React.Fragment, null,
            !rows && !streamFailed && h('p', { className: 'task-muted', role: 'status' }, t('managerLoading')),
            rows?.length === 0 && !streamFailed && h('p', { className: 'task-muted' }, t('managerEmpty')),
            rows?.length > 0 && h('ul', { className: 'task-list task-manager-list' }, rows.map(renderRow)),
            rows?.length > 0 && !streamFailed && settings === null && canDescribe &&
              h('p', { className: 'task-muted', role: 'status' }, t('managerSettingsUnavailable')),
            rows?.length > 0 && !streamFailed && settings === undefined && canDescribe &&
              h('p', { className: 'task-muted', role: 'status' }, t('managerSettingsLoading')),
            rows?.length > 0 && !streamFailed && (!canDescribe ||
              (settings && !rows.some(row => row.configured && (settings.configured.has(row.name)
                ? settings.writable && canMutate : canRestart)))) &&
              h('p', { className: 'task-muted' }, t('managerReadOnly')),
            streamFailed && h('div', { className: 'task-manager-notice' },
              h('p', { className: 'task-muted', role: 'status' }, t('managerFailed')),
              h('button', { type: 'button', className: 'task-manager-action', disabled: Boolean(pending),
                onClick: retry }, t('managerRetry'))),
            notice && h('p', { className: 'task-muted task-manager-notice', role: alert ? 'alert' : 'status' }, t(notice)));
        }

        function SidebarImage({ sessionId, useProjection, useTabInfo, t }) {
          const { tab } = useTabInfo();
          const inputs = useProjection('taskSidebarInputs');
          const address = parseImageAddress(tab.contentId);
          const belongsToSession = address?.sessionId === sessionId;
          const currentItem = belongsToSession
            ? inputs?.attachments.find(row => row.imageRef?.attachmentId === address.attachmentId)
            : undefined;
          const [lastImage, setLastImage] = React.useState();
          React.useEffect(() => {
            if (currentItem) setLastImage({ contentId: tab.contentId, item: currentItem });
          }, [currentItem, tab.contentId]);
          // Keep a selected image visible if a new upload pushes it out of the recent list.
          const item = currentItem ?? (belongsToSession && lastImage?.contentId === tab.contentId
            ? lastImage.item : undefined);
          const loadImage = React.useCallback(attachment =>
            ctx.sessions.binding(sessionId)?.session.readAttachment(attachment), [sessionId]);
          if (!tab.visible) return null;
          return h('div', { className: 'dsh-task-sidebar-image' }, h('style', null, `
            .dsh-task-sidebar-image {
              display: grid; place-items: center; grid-template: minmax(0, 1fr) / minmax(0, 1fr);
              block-size: 100%; min-inline-size: 0; min-block-size: 0;
              padding: 12px; overflow: auto; box-sizing: border-box;
              color: var(--dsw-alias-label-secondary);
            }
            .dsh-task-sidebar-image > .task-image-preview {
              display: block; max-inline-size: 100%; max-block-size: 100%; object-fit: contain;
            }
          `), item ? h(ImagePreview, {
            key: address.attachmentId, attachment: item.imageRef, name: item.name, loadImage, t,
          }) : h('p', { role: 'status' }, t(!inputs && address?.sessionId === sessionId
            ? 'imageLoading' : 'imageUnavailable')));
        }

        function TaskContents({ sessionId, useProjection, useSessions, useSessionStatus, useRemoteAccess,
          t, close, isOpen, skillLookup, managerDialog }) {
          const watchAllowed = useRemoteAccess('mcpManager/watch');
          const describeAllowed = useRemoteAccess('settings/describe');
          const mutateAllowed = useRemoteAccess('settings/mutate');
          const restartAllowed = useRemoteAccess('mcpManager/restart');
          const canWatch = watchAllowed && typeof ctx.get('remote.mcpManager')?.watch === 'function';
          const canDescribe = describeAllowed && typeof ctx.get('remote.settings')?.describe === 'function';
          const canMutate = mutateAllowed && typeof ctx.get('remote.settings')?.mutate === 'function';
          const canRestart = restartAllowed && typeof ctx.get('remote.mcpManager')?.restart === 'function';
          const [managerOpen, setManagerOpen] = React.useState(false);
          const managerTitle = React.useId();
          React.useLayoutEffect(() => {
            if (canWatch || !managerDialog.current?.open) return;
            const dialog = managerDialog.current;
            dialog.close();
            setManagerOpen(false);
            dialog.parentElement?.focus({ preventScroll: true });
          }, [canWatch, managerDialog]);
          const outputs = useProjection('taskSidebarOutputs');
          const inputs = useProjection('taskSidebarInputs');
          const capabilities = useProjection('taskSidebarCapabilities');
          const cwd = useSessions(state => state.byId[sessionId]?.cwd);
          const interaction = useSessionStatus(state => state.get(sessionId)?.pendingInteraction);
          const attention = attentionOf(interaction, t);
          const shown = ctx.sidebarRight.mounted.getSnapshot();
          // A finished session still owns the column: its output files belong to that folder.
          const activeInSidebar = shown === sessionId || (!shown && ctx.sessions.binding(sessionId)?.session.getSnapshot().openState === 'closed');
          const questionId = interaction?.kind === 'question' ? interaction.callId : undefined;
          const questionPanels = questionId ? ctx.get('userQuestionPanels') : undefined;
          const [unavailableQuestionId, setUnavailableQuestionId] = React.useState();
          const [skillRequest, setSkillRequest] = React.useState();
          const canRevealQuestion = questionPanels && questionId !== unavailableQuestionId;
          const loadImage = React.useCallback(attachment => {
            if (ctx.sidebarRight.mounted.getSnapshot() !== sessionId) return;
            return ctx.sessions.binding(sessionId)?.session.readAttachment(attachment);
          }, [sessionId]);

          function showQuestion() {
            if (!activeInSidebar) return;
            if (questionPanels.reveal(sessionId, questionId)) close();
            else setUnavailableQuestionId(questionId);
          }

          function openInSidebar(address, kind) {
            if (!activeInSidebar) return 'otherSession';
            try {
              ctx.sidebarRight.openResource(address(), { kind, destination: 'sidebar' });
              close();
            } catch {
              return 'previewFailed';
            }
          }

          async function openFile(path, trigger) {
            if (!activeInSidebar) return 'otherSession';
            const address = fileAddress(sessionId, cwd, path);
            if (address.startsWith('dsh-resource://file/absolute/')) return 'outsideFolder';
            const workspaceFiles = ctx.get('remote.workspaceFiles');
            if (workspaceFiles?.stat) {
              const result = await workspaceFiles.stat(sessionId, path);
              if (!isOpen() || !trigger.isConnected) return;
              if (ctx.uiSession.adapter.current.getSnapshot().key !== sessionId) return 'otherSession';
              if (!result.ok) return 'fileUnavailable';
            }
            return openInSidebar(() => address);
          }
          const openImage = item => openInSidebar(() => imageAddress(sessionId, item), imageTab);

          async function openSkill(name) {
            if (!activeInSidebar || !isOpen()) return;
            skillLookup.current?.abort();
            const controller = new AbortController();
            skillLookup.current = controller;
            const { signal } = controller;
            setSkillRequest({ name, status: 'skillOpening' });
            try {
              const path = await ctx.sessions.using(sessionId, { source: 'skillCatalog', signal }, async reference => {
                if (reference.binding.session.getSnapshot().openState !== 'open') throw new Error('Session is not open');
                const result = await ctx.remote.skills.list({ sessionId }, signal);
                if (!result.ok) throw new Error('Skill catalog unavailable');
                return result.value.skills.find(skill => skill.name === name)?.path;
              });
              if (signal.aborted || !activeInSidebar || !isOpen()) return;
              if (!path) {
                setSkillRequest({ name, status: 'skillUnavailable' });
                return;
              }
              ctx.sidebarRight.openResource(fileAddress(sessionId, cwd, path), { destination: 'sidebar' });
              close();
            } catch {
              if (!signal.aborted && activeInSidebar && isOpen()) setSkillRequest({ name, status: 'skillFailed' });
            } finally {
              if (skillLookup.current === controller) skillLookup.current = null;
            }
          }

          return h(React.Fragment, null,
            attention && h('div', { className: 'task-attention' },
              h('div', { role: 'status' },
                h('div', { className: 'task-attention-title' }, t('attention')),
                h('p', { className: 'task-muted' }, attention),
                !canRevealQuestion && h('p', { className: 'task-muted' }, t('composerHint'))),
              h('button', { className: 'task-return', type: 'button', onClick: canRevealQuestion ? showQuestion : close },
                t(canRevealQuestion ? 'revealQuestion' : 'closePanel'))),
            h(Inputs, { value: inputs, t, openFile, openImage, loadImage }),
            h(Capabilities, { value: capabilities, openSkill, skillRequest, t,
              openManager: canWatch ? () => {
                const node = managerDialog.current;
                if (!activeInSidebar || !isOpen() || !node || node.open || managerOpen) return;
                node.showModal();
                setManagerOpen(true);
              } : undefined }),
            h('dialog', { ref: managerDialog, className: 'task-connector-dialog',
              'aria-labelledby': managerTitle, 'aria-describedby': `${managerTitle}-scope`,
              onClose: () => { if (!managerDialog.current?.open) setManagerOpen(false); } },
              h('div', { className: 'task-manager-heading' },
                h('h2', { id: managerTitle, className: 'task-manager-title' }, t('manageConnectors')),
                h('button', { type: 'button', className: 'task-manager-close',
                  'aria-label': t('closeManager'), onClick: () => managerDialog.current?.close() }, '×')),
              h('p', { className: 'task-muted', id: `${managerTitle}-scope` }, t('connectorScope')),
              managerOpen && h(ConnectorManager, { dialog: managerDialog, t, canDescribe, canMutate, canRestart, isOpen })),
            h(Outputs, { value: outputs, t, openFile }));
        }

        function TaskPanel(props) {
          const { sessionId, t } = props;
          const id = React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
          const panelId = `dsh-task-panel-${id}`;
          const anchorName = `--${panelId}`;
          const panel = React.useRef(null);
          const trigger = React.useRef(null);
          const skillLookup = React.useRef(null);
          const managerDialog = React.useRef(null);
          const [open, setOpen] = React.useState(false);
          const [placement, setPlacement] = React.useState(null);

          React.useEffect(() => {
            const node = panel.current;
            if (!node || typeof node.hidePopover !== 'function') return;
            const sync = () => {
              const visible = node.matches(':popover-open');
              setOpen(visible);
              if (visible) {
                setPlacement(panelPlacement(trigger.current));
                // Re-measure once the popover is laid out: the header can still be settling.
                requestAnimationFrame(() => setPlacement(panelPlacement(trigger.current)));
                node.focus({ preventScroll: true });
              }
            };
            const replace = () => {
              if (node.matches(':popover-open')) setPlacement(panelPlacement(trigger.current));
            };
            const dismissAway = () => {
              if (ctx.sidebarRight.mounted.getSnapshot() !== sessionId && node.matches(':popover-open')) {
                node.hidePopover();
              }
              replace();
            };
            const cancelOnClose = event => {
              if (event.target !== node || event.newState !== 'closed') return;
              skillLookup.current?.abort();
              if (managerDialog.current?.open) managerDialog.current.close();
            };
            node.addEventListener('beforetoggle', cancelOnClose);
            node.addEventListener('toggle', sync);
            window.addEventListener('resize', replace);
            const unsubscribe = ctx.sidebarRight.mounted.subscribe(dismissAway);
            sync();
            return () => {
              unsubscribe();
              window.removeEventListener('resize', replace);
              node.removeEventListener('beforetoggle', cancelOnClose);
              node.removeEventListener('toggle', sync);
              skillLookup.current?.abort();
            };
          }, [sessionId]);

          // The browser handles the toggle, outside click and Escape for this owned popover.
          return h(React.Fragment, null,
            h('style', null, css),
            h('button', { type: 'button', ref: trigger, className: 'dsh-task-trigger', title: t('title'),
              'aria-label': t('title'), 'aria-haspopup': 'dialog', 'aria-controls': panelId,
              'aria-expanded': open, popovertarget: panelId, style: { anchorName } },
            h('span', { className: 'task-trigger-mark', 'aria-hidden': true },
              h('i'), h('i'), h('i'), h('i'), h('i'), h('i'))),
            h('div', { ref: panel, id: panelId, className: 'dsh-task-panel', popover: 'auto',
              role: 'dialog', 'aria-label': t('title'), tabIndex: -1,
              style: placement
                ? { right: `${placement.right}px`, width: `${placement.width}px`,
                  ...(placement.top ? { top: `${placement.top}px` } : {}) }
                : undefined },
            open && h(TaskContents, {
              ...props, skillLookup, managerDialog,
              close: () => panel.current?.hidePopover(),
              isOpen: () => panel.current?.matches(':popover-open') === true,
            })));
        }

        ctx.slots.inject(header, () => ctx.slots.register({
          name: header, id: 'task-panel', order: 10, locale: namespace,
        }, props => h(TaskPanel, { ...props, key: props.sessionId })));

        ctx.slots.inject(sidebarTab, () => ctx.slots.register({
          name: sidebarTab, key: imageTab, locale: namespace,
        }, SidebarImage));

        // Saved v0.1 tabs can still be closed normally. New sessions have only the header entry.
        ctx.slots.inject(sidebarTab, () => ctx.slots.register({
          name: sidebarTab, key: 'dsh-task-sidebar', locale: namespace,
        }, ({ t }) => h('p', { style: { margin: '14px', color: 'var(--dsw-alias-label-secondary)' } }, t('moved'))));
      },
    };
  },
});
