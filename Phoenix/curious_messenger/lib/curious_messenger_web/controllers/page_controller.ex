defmodule CuriousMessengerWeb.PageController do
  use CuriousMessengerWeb, :controller

  plug CuriousMessengerWeb.AssignUser, preload: :conversations

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
