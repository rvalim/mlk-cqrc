import { Application } from "express";
import ChannelService from "./channelService";
import HandlerVacationService from "./Handler/service";

export enum AppServices {
  HandlerVacationService,
  ChannelManager
}

export default class ServiceManager {
  public static getInstance(app?: Application) {
    if (!ServiceManager.instance) {
      ServiceManager.instance = new ServiceManager(app);
    }
    return ServiceManager.instance;
  }

  private static instance: ServiceManager;

  private readonly _services = new Map<AppServices, any>();

  constructor(app: Application) {
    this._services.set(AppServices.HandlerVacationService, new HandlerVacationService(app));
    this._services.set(AppServices.ChannelManager, new ChannelService());
  }

  public get(service: AppServices) {
    return this._services.get(service);
  }
}
