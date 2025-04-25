import manifest from '@/manifest';
import type { PluginRegistry } from '@/types/mattermost-webapp';

import "./styles.css";
import EmojiPicker from './Components/EmojiPicker';

export default class Plugin {
    public async initialize(registry: PluginRegistry, store: any) {
        registry.registerAdminConsoleCustomSetting(
            manifest.settings_schema.settings[0].key,
            EmojiPicker,
            {
                showTitle: true
            }
        );
    }
}

declare global {
    interface Window {
        registerPlugin(pluginId: string, plugin: Plugin): void;
    }
}

window.registerPlugin(manifest.id, new Plugin());
