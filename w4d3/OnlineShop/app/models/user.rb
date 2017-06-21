class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can not be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil

  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_session_token
    #we must be ensure to use the ||= operator isntead of = or ||, otherwise
    #we will end up with a new session token every time we create
    #a new instance of the User class. This includes finding it in the DB!
    self.session_token ||= self.class.generate_session_token
  end

end
