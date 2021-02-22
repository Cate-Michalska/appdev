// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.

// Original Code to Import the scss file
// import "../css/app.scss"
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"

import { Socket } from "phoenix"
import LiveSocket from "phoenix_live_view"
import CreateConversationFormHooks from "./create_conversation_form_hooks";
import ConversationListHooks from "./conversation_list_hooks"; 
import ConversationHooks from "./conversation_hooks"; 

let Hooks = { CreateConversationFormHooks, ConversationListHooks, ConversationHooks};

let liveSocket = new LiveSocket("/live", Socket, { hooks: Hooks })
liveSocket.connect()

Notification.requestPermission()