﻿CREATE TABLE [User] (
   [Id] BIGINT	NOT NULL CONSTRAINT PK_Users_Id PRIMARY KEY IDENTITY,
   [UserName] NVARCHAR(100) NOT NULL,
   [Email] NVARCHAR(100) NOT NULL,
   [Password] NVARCHAR(100) NOT NULL
)
GO 

CREATE TABLE [Account] (
   [Id] BIGINT	NOT NULL	CONSTRAINT PK_InstaAccount_Id PRIMARY KEY IDENTITY,
   [AccountLink] VARCHAR(200)	NULL
)
GO

CREATE TABLE [TargetAccount] (
   [Id] BIGINT NOT NULL CONSTRAINT PK_TargetAccount_Id PRIMARY KEY IDENTITY,
   [Login] NVARCHAR(100) NOT NULL,
   [LinkAccount] NVARCHAR(200) NOT NULL,
   [AccountId] BIGINT NOT NULL CONSTRAINT FK_Account_Id FOREIGN KEY REFERENCES [Account] (Id)
)
GO

CREATE TABLE [Subscribers] (
   [Id] BIGINT NOT NULL CONSTRAINT PK_Subscribers_Id PRIMARY KEY IDENTITY,
   [Login] NVARCHAR(100) NOT NULL,
   [LinkAccount] NVARCHAR(200) NOT NULL,
   [TargetAccountId] BIGINT NOT NULL CONSTRAINT FK_TargetAccount_Id FOREIGN KEY REFERENCES [TargetAccount] (Id)
)