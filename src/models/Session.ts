import { Sys } from "contentful";

export interface ISession {
  sys: Sys;
  fields: ISessionFields;
}

export interface ISessionFields {
  participantId: string;
  title: string;
  long: boolean;
  startAt: string;
}

export interface IAvatar {
  sys: Sys;
  fields: IAvatarFields;
}

export interface IAvatarFields {
  title: string;
  description: string;
  file: IFile;
}

export interface IFile {
  url: string;
  details: IDetails;
  fileName: string;
  contentType: string;
}

export interface IDetails {
  size: number;
  image: IImage;
}

export interface IImage {
  width: number;
  height: number;
}
