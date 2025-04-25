import React, { ReactElement } from "react";

export interface PluginRegistry {
    registerAdminConsoleCustomSetting(key: string, component: React.FC, options: any)

    // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
}