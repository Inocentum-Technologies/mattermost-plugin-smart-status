package main

import (
	"fmt"

	"github.com/mattermost/mattermost/server/public/model"
)

func (p *Plugin) WebSocketMessageHasBeenPosted(webConnID, userID string, req *model.WebSocketRequest) {

	if req.Action == "custom_com.mattermost.calls_join" {
		config := p.getConfiguration().Clone()
		err := p.API.UpdateUserCustomStatus(userID, &model.CustomStatus{
			Emoji: config.CustomInCallStatusEmoji,
			Text:  config.CustomInCallStatusText,
		})

		p.client.Log.Info(fmt.Sprintf("%+v", err))
		p.client.Log.Info("-------- Setting in meeting status --------")
	}

	if req.Action == "custom_com.mattermost.calls_leave" {
		p.API.RemoveUserCustomStatus(userID)
		p.client.Log.Info("-------- Removing in meeting status --------")
	}
}
