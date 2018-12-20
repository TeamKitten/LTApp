import { Sys } from "contentful";

export interface IParticipant {
  sys: Sys;
  fields: IParticipantFields;
}

export interface IParticipantFields {
  avatar: IAvatar;
  participantId: string;
  name: string;
  afterParty: boolean;
  paid: string;
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
