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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = __importDefault(require("./context"));
const inversify_1 = require("inversify");
let RepositoryBase = class RepositoryBase {
    constructor(type) {
        this.type = type;
    }
    getAll(joins, select = null) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.find({ relations: (joins ? joins : undefined), select: (select ? select : undefined) });
        });
    }
    where(condition, joins = null, select = null) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.find({ where: condition, relations: joins ? joins : null, select: select });
        });
    }
    findOne(condition, joins = null) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.findOne({ where: condition, relations: joins });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.findOne(id);
        });
    }
    getCount(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.count({ where: condition });
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.save(entity);
        });
    }
    add(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.save(entity);
        });
    }
    edit(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.save(entity);
        });
    }
    remove(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.remove(entity);
        });
    }
    update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = (yield context_1.default).getRepository(this.type);
            return yield this.repository.update(id, entity);
        });
    }
};
RepositoryBase = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], RepositoryBase);
exports.default = RepositoryBase;
//# sourceMappingURL=repositoryBase.js.map