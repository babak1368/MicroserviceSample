USE [Authentication]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 8/19/2021 5:16:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](50) NOT NULL,
	[Name] [varchar](50) NULL,
	[Code] [int] NOT NULL,
 CONSTRAINT [PK_Industry] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 8/19/2021 5:16:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CustomerCode] [bigint] NULL,
	[FirstName] [nvarchar](200) NULL,
	[LastName] [nvarchar](300) NULL,
	[UserName] [nvarchar](200) NULL,
	[Gender] [bit] NULL,
	[Mobile] [varchar](13) NULL,
	[Email] [varchar](50) NULL,
	[Address] [nvarchar](300) NULL,
	[HomeLink] [varchar](300) NULL,
	[Password] [varbinary](50) NULL,
	[IsActive] [bit] NOT NULL,
	[RegisterDate] [datetime] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserToken]    Script Date: 8/19/2021 5:16:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserToken](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[OwnerUserId] [int] NULL,
	[AccessTokenHash] [varchar](max) NOT NULL,
	[AccessTokenExpirationDateTime] [datetime] NULL,
	[RefreshToken] [varchar](500) NULL,
	[RefreshTokenExpiresUtc] [datetime] NULL,
	[RegisterDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Opinion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsActive]  DEFAULT ((0)) FOR [IsActive]
GO
