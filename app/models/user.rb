class User < ApplicationRecord
    has_one :scorecard
    has_many :scoreboards, through: :scorecard
end
