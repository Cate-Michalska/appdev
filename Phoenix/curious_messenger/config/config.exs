# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :curious_messenger,
  ecto_repos: [CuriousMessenger.Repo]

# Configures the endpoint
config :curious_messenger, CuriousMessengerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "vDX9LcUKy/KOIdLRpOgIR0y9psL0NTVApZc5VceuscijEKEtgGu+l0EY3Y0abTqr",
  render_errors: [view: CuriousMessengerWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: CuriousMessenger.PubSub,
  live_view: [signing_salt: "gs/KKKsYvmDV8iFcZk4bk9mPsMNW1Rps"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
