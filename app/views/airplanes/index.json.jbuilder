json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :name, :seat_row, :seat_column
  json.url airplane_url(airplane, format: :json)
end
