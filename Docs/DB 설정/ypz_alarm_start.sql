CREATE TABLE `alarm_start` (
  `as_id` bigint NOT NULL,
  `uid` bigint DEFAULT NULL,
  `pid` bigint DEFAULT NULL,
  `policy_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`as_id`),
  KEY `uid_idx` (`uid`),
  KEY `pid_idx` (`pid`),
  CONSTRAINT `pid` FOREIGN KEY (`pid`) REFERENCES `policy` (`pid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3