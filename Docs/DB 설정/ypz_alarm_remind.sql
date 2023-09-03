CREATE TABLE `alarm_remind` (
  `ar_id` bigint NOT NULL,
  `uid` bigint DEFAULT NULL,
  `pid` bigint DEFAULT NULL,
  `duedate` varchar(45) DEFAULT NULL,
  `policy_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ar_id`),
  KEY `uid` (`uid`),
  KEY `pid` (`pid`),
  CONSTRAINT `alarm_remind_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`),
  CONSTRAINT `alarm_remind_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `policy` (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3