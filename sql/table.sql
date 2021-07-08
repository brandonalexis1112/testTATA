CREATE TABLE `character` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `height` decimal DEFAULT NULL,
  `mass` INT DEFAULT NULL,
  `hair_color` varchar(10) DEFAULT NULL,
  `skin_color`varchar(10) DEFAULT NULL,
  `eye_color`varchar(10) DEFAULT NULL,
  `birth_year`date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `homeworld`varchar(40) DEFAULT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

CREATE TABLE `films` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(40) DEFAULT NULL,
  `characterId` int(11) NOT NULL ,
  
  PRIMARY KEY (`id`)
   CONSTRAINT FK_PersonOrder FOREIGN KEY (characterId)
    REFERENCES character(id)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(40) DEFAULT NULL,
  `characterId` int(11) NOT NULL ,
  
  PRIMARY KEY (`id`)
   CONSTRAINT FK_PersonOrder FOREIGN KEY (characterId)
    REFERENCES character(id)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;