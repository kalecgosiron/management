/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : work

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 11/02/2020 17:56:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for captext
-- ----------------------------
DROP TABLE IF EXISTS `captext`;
CREATE TABLE `captext`  (
  `captext` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `uuid` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`uuid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of captext
-- ----------------------------
INSERT INTO `captext` VALUES ('g32t', '03UxiPs7Nbuj6SA1NTxCll6pAuJNZVfQ', '2020-02-10 16:08:56');
INSERT INTO `captext` VALUES ('lByF', '08tQiVdVTadmuOsPM9JhDeLxdrqQnarN', '2020-01-19 10:43:45');
INSERT INTO `captext` VALUES ('kJBJ', '0Nk4WM5CKt0GE0LoKHHutU6w67qV3qPP', '2020-01-22 15:28:01');
INSERT INTO `captext` VALUES ('4FNR', '1X4omtrkawQzR9i927liTjKZ7TYIe87L', '2020-02-10 16:25:01');
INSERT INTO `captext` VALUES ('rjXz', '2AxR3L7z6zxutMbjh05iEEKIz2g6SnD4', '2020-01-19 09:04:05');
INSERT INTO `captext` VALUES ('78t2', '2FGmOIQOSO37R7TUXwxvNryTDcdtSV4A', '2020-02-11 09:05:35');
INSERT INTO `captext` VALUES ('oh2Y', '2svzuSTGygbtpUdDaa5RpQSwbs0G39fj', '2020-01-19 17:10:17');
INSERT INTO `captext` VALUES ('JdBg', '32ByF0NkQSUEdCekCOiTUdXnmeuaSBJE', '2020-02-06 17:58:35');
INSERT INTO `captext` VALUES ('U8kr', '3CmX3k2hjDwxaBrsyciNtmWp4docemiI', '2020-01-18 11:59:55');
INSERT INTO `captext` VALUES ('s8r7', '4YOxXrvRxND77uGwIeCbMfzjNiscDqKf', '2020-01-22 17:22:46');
INSERT INTO `captext` VALUES ('p3iK', '4mKGvBBDaxs3xMo8MBeGEIIWLKWmERZr', '2020-01-20 09:47:03');
INSERT INTO `captext` VALUES ('sl8x', '4qqeRr41nDe6Me5jlJKaT00FTNb68gKY', '2020-01-19 09:39:12');
INSERT INTO `captext` VALUES ('B1xG', '6Yh0DUIqrk1xFd2GLiX0VHNQb3rccpDW', '2020-01-19 10:11:48');
INSERT INTO `captext` VALUES ('rdg4', '6gqdWzsp564slpL5MPiPOXw4cIvj7sOk', '2020-01-21 16:41:56');
INSERT INTO `captext` VALUES ('Pz5p', '6pxYqxZJXGnibxO4At9Q3Uh4BrP9uOdZ', '2020-01-20 14:39:47');
INSERT INTO `captext` VALUES ('Ewft', '78FnS4Uw8bQaXTnBVGx5pvTvz4Fvd97l', '2020-02-10 09:35:09');
INSERT INTO `captext` VALUES ('lE8f', '7CsCMmRV1WTBVhEbUGGBwoX8xbOTc8HX', '2020-01-17 18:32:24');
INSERT INTO `captext` VALUES ('yl7W', '7TUfckxUPEQmat2jEqOmczT4LArAmxIJ', '2020-01-20 09:48:01');
INSERT INTO `captext` VALUES ('lIsj', '7ZgM6caEPENRx7ySJBEMZq4JybTevxv2', '2020-01-19 10:47:36');
INSERT INTO `captext` VALUES ('oZeR', '7j9odoLtrd5p3h5Cxoiu6HqCSAaTPGU4', '2020-02-10 16:04:23');
INSERT INTO `captext` VALUES ('x4TX', '8LN8ZuaOX0kBpiAO5FqDi5NGF2JZnpU9', '2020-02-10 17:51:39');
INSERT INTO `captext` VALUES ('Kj4z', '8VXSvg5Px2vaTFRTThM3Lel7rSJSskm7', '2020-01-17 18:32:17');
INSERT INTO `captext` VALUES ('BzfS', '8xsZnRtUqbJ4FGeRoGBOcDcenTKP5Qgw', '2020-01-21 16:39:22');
INSERT INTO `captext` VALUES ('hsmn', '94Ozm2i5APunDecqd6HpWjqMX5GMe1TH', '2020-02-10 09:35:23');
INSERT INTO `captext` VALUES ('JGEs', 'BMG6bkbCgFmd0fxpFQqgcDW34YQlyETj', '2020-02-10 16:08:09');
INSERT INTO `captext` VALUES ('2iwC', 'BkloNPNznQit3VPtaWaPDF7UJtGamnc8', '2020-01-20 11:39:25');
INSERT INTO `captext` VALUES ('BzaX', 'BoBMlD5G1ornuJro5vI5wzS19d5s8S89', '2020-01-20 09:49:06');
INSERT INTO `captext` VALUES ('PmfR', 'CsbJ95NvFoYOWNWnxwFRUsNxflrp8fHd', '2020-01-19 17:09:56');
INSERT INTO `captext` VALUES ('gvaa', 'DFo9AxJuZB4lhWiRZQ3j0x24WvGaz3ln', '2020-02-10 17:51:56');
INSERT INTO `captext` VALUES ('SL7k', 'DnJxUY6Ofu1fhzFJpbJzAflr6D00XLIG', '2020-02-10 16:09:02');
INSERT INTO `captext` VALUES ('EfyF', 'DwqqrfJXik2ZyqZHU2u3lT9WKh3krZhH', '2020-01-18 16:31:11');
INSERT INTO `captext` VALUES ('dlF2', 'EybvRDk32pisMUk5WVsagkJd80YLIRF8', '2020-01-19 09:04:17');
INSERT INTO `captext` VALUES ('VhrF', 'FydSuuQ8whTAzEgFWq1HfFBSiENm8Xqe', '2020-02-10 16:09:15');
INSERT INTO `captext` VALUES ('0lxs', 'HEfCds2yjA7fhf5Ql99pa1EoW18HJ8BB', '2020-02-10 09:33:16');
INSERT INTO `captext` VALUES ('ShaL', 'Hs66bsz1SnsUrboSU2IO80ntloOWzBeC', '2020-01-21 14:09:46');
INSERT INTO `captext` VALUES ('Y7Ti', 'HvNnFobvmtRPagtBhE8z7aHLLppy89l7', '2020-01-18 16:53:32');
INSERT INTO `captext` VALUES ('echl', 'HyQZHQULX4tNSu7MdPEBuAOupe3LI0fZ', '2020-01-19 10:08:33');
INSERT INTO `captext` VALUES ('yIhn', 'IvC4TM3XfjDzCBCHZ5NxaEZSmeXNdZyo', '2020-01-19 10:10:30');
INSERT INTO `captext` VALUES ('IQdT', 'Jvx0xNlL5cQLQ0HBlkOWnUumKQmf3fmN', '2020-01-21 16:29:55');
INSERT INTO `captext` VALUES ('MDdl', 'K3TGLui978Vb2dpjKV6UX7F866DvXBMn', '2020-01-22 16:00:31');
INSERT INTO `captext` VALUES ('uQqP', 'LURXyy3M9fgjKkl2RPP7jIXZZcoiUgIs', '2020-02-10 08:42:03');
INSERT INTO `captext` VALUES ('32fN', 'MaNHV4kJ5nqor0VvJJ36aHYhBdIZyW0R', '2020-01-19 09:20:33');
INSERT INTO `captext` VALUES ('D6lK', 'NXL11n8fE82APvTzPreSmyAmFHV2gjfJ', '2020-02-10 17:51:49');
INSERT INTO `captext` VALUES ('CRbj', 'PIrvHiOieDb80OBsq4BaVTVLmkwIvZul', '2020-01-22 16:00:38');
INSERT INTO `captext` VALUES ('GzDU', 'QlEKcFOiiDkn2mHWrNDaED7nVUo9Kwf7', '2020-02-10 09:19:45');
INSERT INTO `captext` VALUES ('T9RI', 'QmswCm7QX6VDxMpfzUVRyHat79tjNjkx', '2020-02-10 09:33:31');
INSERT INTO `captext` VALUES ('irbf', 'RDKgvaHCiP3mOTLnfGlG8aOtuXcn4bg9', '2020-01-21 10:28:54');
INSERT INTO `captext` VALUES ('7jRn', 'RKeC8mwkInNugQ3QBpjWrWPawTX5M0ld', '2020-01-18 16:57:31');
INSERT INTO `captext` VALUES ('L8QM', 'RNLI12MhadlXMJ0nPSU0KJ5Cf35Zr2ZV', '2020-01-20 09:48:10');
INSERT INTO `captext` VALUES ('JyjI', 'RsJ906yO0ix59jqcWILh1FIRyCWblTsP', '2020-01-19 09:37:51');
INSERT INTO `captext` VALUES ('7ym7', 'SoZTK46kLhXHVYLM4xcO58DqCVpDPF5j', '2020-02-11 08:55:37');
INSERT INTO `captext` VALUES ('RdkD', 'TLYD2FajNafOOi9RQSW65wXMGZ62699K', '2020-02-10 09:13:31');
INSERT INTO `captext` VALUES ('TvML', 'UDJRabTIubrWZ4NGiJtLr3nzhGe4PYZ3', '2020-01-19 09:08:25');
INSERT INTO `captext` VALUES ('fGur', 'UP3JbfSaGdu820zmnai3Cd4xbj976IeE', '2020-02-11 08:52:10');
INSERT INTO `captext` VALUES ('BiyH', 'VQr2zGXLwrETNHIlAdIsFz69e4JGcz9d', '2020-02-10 09:33:02');
INSERT INTO `captext` VALUES ('RNkR', 'Vx8hDkQUhGXeFIEpx2Jwp0LqFZQUKHgy', '2020-01-21 16:30:03');
INSERT INTO `captext` VALUES ('P37R', 'WNjF4fmnnMzX3ozPMk411bDTqay1COUq', '2020-02-10 16:08:35');
INSERT INTO `captext` VALUES ('Bl7q', 'WiLqoLD44yy5X93mstHaXRtb0lfL3Xev', '2020-01-19 17:10:10');
INSERT INTO `captext` VALUES ('73al', 'WoidApHi9Pn0AMEx5DoygMYMYXkaki6p', '2020-01-19 11:37:33');
INSERT INTO `captext` VALUES ('wljx', 'X8ZPDYPqzxqsYU2LmbIejZh0dTtSrEPo', '2020-01-21 16:38:58');
INSERT INTO `captext` VALUES ('CXlg', 'Z0R3vycyCmFweh9OYq4uqeV1SrGXUnfh', '2020-01-20 11:26:42');
INSERT INTO `captext` VALUES ('yv2U', 'ZQ0c8H4nZf33UhjnjkxvgsSNaOoMNgcx', '2020-02-10 16:08:02');
INSERT INTO `captext` VALUES ('QYsM', 'Zr3Yu3IR3LC49Prl8bq5f8RSvmlBOHwQ', '2020-02-10 16:08:29');
INSERT INTO `captext` VALUES ('SJGc', 'cUaMl2V7UmicPE7YWlOBTQwXmMYh1bDx', '2020-01-19 10:10:28');
INSERT INTO `captext` VALUES ('aBkd', 'eIXUcAoRC9yg9HCtzyD34vQOSbMbIcxy', '2020-01-21 16:32:11');
INSERT INTO `captext` VALUES ('t45b', 'eJFw7QIUYy4hCrkWp8A2oWJkjJY57t93', '2020-01-19 10:10:48');
INSERT INTO `captext` VALUES ('8Fhf', 'eKg1STLoahKlWVluFPrOEObyOipLFoQy', '2020-01-19 09:04:06');
INSERT INTO `captext` VALUES ('29f6', 'fKe4c4Yt9sy48V9sfhQRCHOhpDVVZwXK', '2020-01-19 17:10:04');
INSERT INTO `captext` VALUES ('QyZE', 'fuwI9DhS6Ty3rSvQWTRZTYPz4GnEZ53n', '2020-02-10 16:09:10');
INSERT INTO `captext` VALUES ('PXZB', 'fzKHHn35jcIk54AMp5kQC6fkG1WU8GH5', '2020-02-10 09:33:25');
INSERT INTO `captext` VALUES ('pEvq', 'gLKkOtfkkvLTeOmXjuxUw4x4gZ1wmxxk', '2020-02-10 16:09:56');
INSERT INTO `captext` VALUES ('n5Uk', 'i4Nd6Nj0rTFUr8G1xj76YjM9LoLANBu8', '2020-02-10 15:40:34');
INSERT INTO `captext` VALUES ('8Mec', 'ib30exFpqLLWgGgX7Z7JH0zwRR8zNvej', '2020-02-10 16:04:18');
INSERT INTO `captext` VALUES ('jxZl', 'igN2iBxbQZ5M8QT28HkEXjjeVspuf5ve', '2020-01-21 16:24:06');
INSERT INTO `captext` VALUES ('Cvg2', 'itmGFmPIaELxAEGkUwAgraDiyRfOnru1', '2020-01-22 16:00:38');
INSERT INTO `captext` VALUES ('ICCL', 'jbPxoEzrqhF3H4RhBcA7eWmw83Ba7181', '2020-02-10 16:04:08');
INSERT INTO `captext` VALUES ('arl6', 'jd3cGEUPoLEgk33hcBEOJhN4rYx5xEZr', '2020-01-22 16:00:31');
INSERT INTO `captext` VALUES ('SZn6', 'jnivjyB8wN2Lsom8gdusQEkyxGsDVzVt', '2020-02-10 09:45:16');
INSERT INTO `captext` VALUES ('0PPy', 'lpFJTjckmFaRKfn10Mm8L3uoy4AeOB5B', '2020-01-19 11:37:39');
INSERT INTO `captext` VALUES ('VFTe', 'mDM82ofdWJWsmCCg0N3EgcZX7X25XXw7', '2020-01-21 16:30:15');
INSERT INTO `captext` VALUES ('8bBC', 'mOSTOIpek8t2Vn0qOeA0DBHNLHxyIAWv', '2020-01-19 10:10:41');
INSERT INTO `captext` VALUES ('oliT', 'mOwsPIPMvw43eAh764rxVzVnDZPedYQf', '2020-01-19 11:37:25');
INSERT INTO `captext` VALUES ('fjNc', 'nbV3pVc3pU5mQ66Hy24BOVKQmqbsZJIU', '2020-01-22 14:28:04');
INSERT INTO `captext` VALUES ('5rsZ', 'oC1laxlGbrRXC18X2oEqBs8uxxqg9O8x', '2020-02-10 09:35:29');
INSERT INTO `captext` VALUES ('P9tv', 'pRMV9pk0TAGkFSinpyee1YqNOaFFHnSF', '2020-01-19 09:07:49');
INSERT INTO `captext` VALUES ('FdlU', 'qqK3jwA69UkF4uMGlfBLCULrAuNTvnzJ', '2020-01-21 14:42:09');
INSERT INTO `captext` VALUES ('bK5T', 'sRIJ3QT0CoqLviyIFGS6qtKDU69W4ZyJ', '2020-01-21 16:46:09');
INSERT INTO `captext` VALUES ('twKz', 'tB3Mw6AfHtfhKxfJHT2PpjRUIAAjWyUn', '2020-01-21 16:24:26');
INSERT INTO `captext` VALUES ('3fji', 'vIh7qDszqEFZQoWCDv4dKRpMzwwGG1Rb', '2020-02-11 08:55:47');
INSERT INTO `captext` VALUES ('jaY9', 'w69PlXES8Zuv2lmMySO60Ov3vg4XB9HU', '2020-02-11 08:59:16');
INSERT INTO `captext` VALUES ('aFFf', 'xPQ90dnA0Uz4F5oMsrPGD0KYwp5ItsKv', '2020-02-10 16:07:32');
INSERT INTO `captext` VALUES ('cGMs', 'yjwAM6jpYfNppMP70oJ4ECOEwNyFo1d4', '2020-02-10 15:58:34');
INSERT INTO `captext` VALUES ('72fi', 'yr6AHxlKPAsGYBkKGwwqfg8iF5Zi09vy', '2020-02-10 09:47:16');
INSERT INTO `captext` VALUES ('4ElZ', 'zF02GFzIyutpfulyfJdRggRW2PTWWfdP', '2020-02-10 16:08:16');
INSERT INTO `captext` VALUES ('cjcN', 'zGlk1vof5QxNkozYjm4xQdyK3a6WFEXZ', '2020-01-19 10:11:51');
INSERT INTO `captext` VALUES ('Rqks', 'zi5uuGyYYokUxnMdcnufQHLRWywRqPHI', '2020-01-17 18:32:11');
INSERT INTO `captext` VALUES ('KI2T', 'ziOIvXUQcih2ayJ2roclccYtzm4NET5p', '2020-01-22 14:27:55');

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `employeeid` char(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `department` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `vehicleinsurancequantity` int(11) NULL DEFAULT NULL,
  `novehicleinsurancequantity` int(11) NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `changetime` datetime(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', '车商业务部', '江尚烨', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('2', '车商业务部', '李紫贤', 7, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('3', '新渠道业务部/V盟业务部', '邹春丽', 17, 1, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('4', '修理厂业务部', '谭素平', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('5', '修理厂业务部', '李勇刚', 12, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('6', '车队业务部', '李志伟', 8, 2, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('7', '修理厂业务部', '冯天民', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('8', '修理厂业务部', '冯敏深', 3, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('9', '车队业务部', '叶珈僖', 9, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('10', '车队业务部', '廖瑞波', 1, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('11', '街口营业部', '黎宝嫦', 2, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('12', '街口营业部', '何远生', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('13', '街口营业部', '陈泽文', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('14', '街口营业部', '温岳凯', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('15', '街口营业部', '李泳欣', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('16', '政企项目部', '何丹霞', 2, 14, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('17', '车队业务部', '李志明', 0, 7, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('18', '政企项目部', '巢泳仪', 0, 15, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('19', '政企项目部', '欧阳婷', 0, 36, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('20', '政企项目部', '钟展翔', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('21', '非车险/重要客户业务部', '戚敏姗', 0, 2, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('23', '太平营销服务部（农网）', '汤丽华', 2, 4, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('25', '修理厂业务部', '梁国栋', 0, 0, '2020-02-01 10:17:36', '2020-02-01 10:17:36');
INSERT INTO `employee` VALUES ('KERCo1X3RR', '街口营业部', '余晓燕', 10, 5, '2020-02-11 14:34:51', '2020-02-11 14:34:51');

-- ----------------------------
-- Table structure for novehicleinsurance
-- ----------------------------
DROP TABLE IF EXISTS `novehicleinsurance`;
CREATE TABLE `novehicleinsurance`  (
  `ordernumber` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `applicant` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `ordersignature` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `charge` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `dispatchclerk` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `orderprintnumber` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `attributiondepartment` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `createuser` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `lastchangeuser` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`ordernumber`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userid` char(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` char(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `userauthority` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `jointime` datetime(0) NULL DEFAULT NULL,
  `department` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('5379491328', 'admin', 'F7A385AC0A915ABB020DDD3908BE9E6B', 'superadmin', '2020-01-01 17:45:22', '其他');
INSERT INTO `user` VALUES ('7632382976', 'kalecgos', 'F7A385AC0A915ABB020DDD3908BE9E6B', 'documentpost', '2020-01-18 16:40:10', '其他');
INSERT INTO `user` VALUES ('EWqUaANkwY', 'jiangshangye', '0DA9F591B4036F6EC4D0B3892BD31FC5', 'departmentmanagement', '2020-02-10 16:16:37', '车商业务部');
INSERT INTO `user` VALUES ('ghST2hxPJO', 'dongdong', '3EA44BD36D49E8F4A55F544F4340D04C', 'charge', '2020-02-11 08:58:29', '其他');
INSERT INTO `user` VALUES ('jKvjQphGxq', 'jingyi', '3EA44BD36D49E8F4A55F544F4340D04C', 'charge', '2020-02-11 17:33:26', '其他');
INSERT INTO `user` VALUES ('qV9dCUADyL', 'wengbo', '2A3C98B28D07CD543264824D81F5E94F', 'superadmin', '2020-02-11 17:33:53', '其他');

-- ----------------------------
-- Table structure for vehicleinsurance
-- ----------------------------
DROP TABLE IF EXISTS `vehicleinsurance`;
CREATE TABLE `vehicleinsurance`  (
  `ordernumber` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `insured` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `licenseplate` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `ordersignature` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `charge` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `date` date NULL DEFAULT NULL,
  `dispatchclerk` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `orderprintnumber` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `attributiondepartment` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `createuser` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `lastchangeuser` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`ordernumber`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
