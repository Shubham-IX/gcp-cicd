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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
var typedi_1 = require("typedi");
var mapper_1 = require("../mapper");
var boomtown_client_1 = require("../client/boomtown-client");
var helpers_1 = require("../../core/helpers");
var api_paths_1 = require("../../configs/api-paths");
var CustomerRepository = (function () {
    function CustomerRepository(boomtownClient) {
        this.boomtownClient = boomtownClient;
    }
    CustomerRepository.prototype.get = function (listOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var apiRequest, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiRequest = (0, helpers_1.createApiRequest)(api_paths_1.apiPaths.getCustomerApi, 'GET', '', listOptions);
                        return [4, this.boomtownClient.request(apiRequest)];
                    case 1:
                        result = _a.sent();
                        return [2, mapper_1.CustomerMap.mapper(result.data)];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1.response && error_1.response.data ? mapper_1.ErrorMap.error(error_1.response.data) : error_1;
                    case 3: return [2];
                }
            });
        });
    };
    CustomerRepository.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiRequest, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiRequest = (0, helpers_1.createApiRequest)(api_paths_1.apiPaths.getCustomerByIdApi(id), 'GET');
                        return [4, this.boomtownClient.request(apiRequest)];
                    case 1:
                        result = _a.sent();
                        return [2, mapper_1.CustomerMap.mapper(result.data)];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2.response && error_2.response.data ? mapper_1.ErrorMap.error(error_2.response.data) : error_2;
                    case 3: return [2];
                }
            });
        });
    };
    CustomerRepository.prototype.post = function (customerCreateRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, apiRequest, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = JSON.stringify(mapper_1.CustomerMap.toBTRequestModel(customerCreateRequest));
                        apiRequest = (0, helpers_1.createApiRequest)(api_paths_1.apiPaths.createUpdateCustomerApi, 'POST', payload);
                        return [4, this.boomtownClient.request(apiRequest)];
                    case 1:
                        result = _a.sent();
                        return [2, mapper_1.CustomerMap.customerCreateResponse(result.data)];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3.response && error_3.response.data ? mapper_1.ErrorMap.error(error_3.response.data) : error_3;
                    case 3: return [2];
                }
            });
        });
    };
    CustomerRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiRequest, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        apiRequest = (0, helpers_1.createApiRequest)(api_paths_1.apiPaths.deleteCustomerApi(id), 'POST');
                        return [4, this.boomtownClient.request(apiRequest)];
                    case 1:
                        result = _a.sent();
                        return [2, mapper_1.ResponseMap.response(result.data)];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4.response && error_4.response.data ? mapper_1.ErrorMap.error(error_4.response.data) : error_4;
                    case 3: return [2];
                }
            });
        });
    };
    CustomerRepository.prototype.smsInvite = function (smsInviteData) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, apiRequest, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = mapper_1.CustomerMap.toBTSmsInviteDataModel(smsInviteData);
                        apiRequest = (0, helpers_1.createApiRequest)(api_paths_1.apiPaths.customerSmsInviteApi, 'POST', JSON.stringify(payload));
                        return [4, this.boomtownClient.request(apiRequest)];
                    case 1:
                        result = _a.sent();
                        return [2, mapper_1.CustomerMap.fromBTSmsInviteResponse(result.data)];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5.response && error_5.response.data ? mapper_1.ErrorMap.error(error_5.response.data) : error_5;
                    case 3: return [2];
                }
            });
        });
    };
    CustomerRepository = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [boomtown_client_1.BoomtownClient])
    ], CustomerRepository);
    return CustomerRepository;
}());
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer-repository.js.map