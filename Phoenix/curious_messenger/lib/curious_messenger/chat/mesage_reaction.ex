defmodule CuriousMessenger.Chat.MesageReaction do
  use Ecto.Schema
  import Ecto.Changeset

  schema "chat_message_reactions" do
    field :message_id, :id
    field :user_id, :id
    field :emoji_id, :id

    timestamps()
  end

  @doc false
  def changeset(mesage_reaction, attrs) do
    mesage_reaction
    |> cast(attrs, [])
    |> validate_required([])
  end
end
