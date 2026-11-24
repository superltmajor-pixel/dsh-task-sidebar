# Task Sidebar

A small panel in the conversation header that answers three questions at a glance: what went into this session, which skills and connectors it used, whether anything is waiting for you, and what it delivered — with one click to read the original in the right sidebar.

## Why

The longer a session runs, the easier it is to lose track of **what you fed it**, **what it used**, and **what it produced**. Those live scattered across the transcript: scrolling up takes a while, and even then you usually need one more click to see the content.

This panel collects the three into a short per-session list, and hands "show me the content" over to the right sidebar. The panel tells you what exists; the sidebar shows it.

It deliberately does not keep a second progress list. The session's own task card already covers execution; duplicating it only creates another copy of the truth to maintain.

## What is inside

- **Inputs** — the last 20 attachments you sent in this session and the last 30 `@`-referenced paths, newest first. Click an image row to expand a thumbnail, click the thumbnail to open the original in the right sidebar; click a referenced path to open a supported file in the same sidebar. Uploaded non-image attachments show their name and size. The list is rebuilt from the session record, so it survives turns and restarts.
- **Skills and connectors** — the skills and connectors (MCP servers) this session actually used. Expand a skill for its description, or use 「查看技能文档」 to open its Markdown source in the right sidebar. Expand a connector for the tools it called in this session. 「管理」 shows the live status and tool count of globally managed connectors: ones managed by settings can connect or disconnect, plugin-registered ones can reconnect. These actions affect every session; statically configured connectors, and ones scoped to a single agent, are not listed.
- **Waiting for you** — approvals, questions and plan reviews currently pending. Locatable questions open directly; anything else is handled in the composer at the bottom of the chat.
- **Outputs** — the last 60 files this session explicitly delivered; delivering the same path again moves it to the front. Click a file to preview it in the right sidebar, including in finished or archived sessions. When a file cannot be opened, the reason is shown under the row and the path can be copied. A forked session starts counting from its own first delivery.

Every group starts collapsed, counts appear on hover, and the panel follows the width of the right sidebar so it never covers the conversation.

## Install

The first release is verified on **DeepSeek Harness 0.2.2-rc.5**.

Install `dsh-task-sidebar` from the plugin manager, or from the command line:

```sh
dsh plugin --profile desktop add dsh-task-sidebar
```

Use `desktop` for the desktop app and `web` for a standalone web profile. If you previously enabled the local `@local/dsh-task-sidebar`, disable it first so two panels are not registered at once.

## Usage

Open a session that already has messages, click the checklist icon in the header, and the panel opens under the button. Click the icon again, click outside, or press Esc to close. Everything else stays the same: the panel updates as the session runs. Turn 「任务面板」 off in the plugin manager when you do not need it.

## Known limitations

- Verified on 0.2.2-rc.5 only; newer DSH releases need a re-check.
- Non-image files uploaded as **attachments** in the web version have no local path, so they show name and size without an open action. In the desktop app such files usually land in the reference group instead, where they open normally.
- Right-sidebar previews depend on the host claiming the file address: when a file is outside the session folder, has been moved, or the session changed, the panel states the reason instead of failing silently.
- Connector management covers globally managed connectors only, not statically configured or single-agent ones.

## Compatibility and self-checks

Before release, `npm test` validates package metadata and loader IDs, replays user messages through the input projection and renders the panel rows, and exercises the file row's failure, copy and manual-fallback branches. Real interaction between the panel and the right sidebar still has to be confirmed on the desktop.
