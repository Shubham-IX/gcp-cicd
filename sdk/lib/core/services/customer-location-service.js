"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLocationService = void 0;
var typedi_1 = require("typedi");
var CustomerLocationService = (function () {
    function CustomerLocationService(customerLocationRepository) {
        this.customerLocationRepository = customerLocationRepository;
    }
    CustomerLocationService.prototype.getByCustomerId = function (id, customerLocationOptions) {
        return this.customerLocationRepository.getByCustomerId(id, customerLocationOptions);
    };
    CustomerLocationService.prototype.post = function (customerLocationCreateRequest) {
        return this.customerLocationRepository.post(customerLocationCreateRequest);
    };
    CustomerLocationService.prototype.delete = function (id) {
        return this.customerLocationRepository.delete(id);
    };
    CustomerLocationService.prototype.getByExternalId = function (id) {
        return this.customerLocationRepository.getByExternalId(id);
    };
    CustomerLocationService.prototype.getContactByCustomerId = function (customerId, customerLocationId) {
        return this.customerLocationRepository.getContactByCustomerId(customerId, customerLocationId);
    };
    CustomerLocationService.prototype.getMetaStatus = function () {
        return this.customerLocationRepository.getMetaStatus();
    };
    CustomerLocationService = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [Object])
    ], CustomerLocationService);
    return CustomerLocationService;
}());
exports.CustomerLocationService = CustomerLocationService;
//# sourceMappingURL=customer-location-service.js.map