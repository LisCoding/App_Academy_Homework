CREATE TABLE plays (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL, -- IT HAS TO HAVE A VALUE
  yr INTEGER NOT NULL ,
  playswrights_id INTEGER NOT NULL,
  FOREING KEY(playswrights_id) REFERECES playswrights(id)
);

-- THIS IS GOING TO HAVE A FOREING ID
CREATE TABLE playswrights(
  id INTEGER PRIMARY KEY
  name TEXT NOT NULL
  birthday_year


);
