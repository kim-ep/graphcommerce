<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
/* eslint-disable */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
<<<<<<< HEAD
    CompareVariantSchema: function() {
        return CompareVariantSchema;
    },
=======
    isDefinedNonNullAny: function() {
        return isDefinedNonNullAny;
    },
    definedNonNullAnySchema: function() {
        return definedNonNullAnySchema;
    },
    CompareVariantSchema: function() {
        return CompareVariantSchema;
    },
    ProductFiltersLayoutSchema: function() {
        return ProductFiltersLayoutSchema;
    },
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
    GraphCommerceConfigSchema: function() {
        return GraphCommerceConfigSchema;
    },
    GraphCommerceDebugConfigSchema: function() {
        return GraphCommerceDebugConfigSchema;
    },
    GraphCommerceStorefrontConfigSchema: function() {
        return GraphCommerceStorefrontConfigSchema;
    },
    MagentoConfigurableVariantValuesSchema: function() {
        return MagentoConfigurableVariantValuesSchema;
<<<<<<< HEAD
    },
    ProductFiltersLayoutSchema: function() {
        return ProductFiltersLayoutSchema;
    },
    SidebarGalleryConfigSchema: function() {
        return SidebarGalleryConfigSchema;
    },
    SidebarGalleryPaginationVariantSchema: function() {
        return SidebarGalleryPaginationVariantSchema;
    },
    definedNonNullAnySchema: function() {
        return definedNonNullAnySchema;
    },
    isDefinedNonNullAny: function() {
        return isDefinedNonNullAny;
=======
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
    }
});
const _zod = require("zod");
const isDefinedNonNullAny = (v)=>v !== undefined && v !== null;
const definedNonNullAnySchema = _zod.z.any().refine((v)=>isDefinedNonNullAny(v));
const CompareVariantSchema = _zod.z.enum([
    "CHECKBOX",
    "ICON"
]);
const ProductFiltersLayoutSchema = _zod.z.enum([
    "DEFAULT",
    "SIDEBAR"
]);
<<<<<<< HEAD
const SidebarGalleryPaginationVariantSchema = _zod.z.enum([
    "DOTS",
    "THUMBNAILS_BOTTOM"
]);
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagentoConfigurableVariantValuesSchema = exports.GraphCommerceStorefrontConfigSchema = exports.GraphCommerceDebugConfigSchema = exports.GraphCommerceConfigSchema = exports.ProductFiltersLayoutSchema = exports.CompareVariantSchema = exports.definedNonNullAnySchema = exports.isDefinedNonNullAny = void 0;
/* eslint-disable */
const zod_1 = require("zod");
const isDefinedNonNullAny = (v) => v !== undefined && v !== null;
exports.isDefinedNonNullAny = isDefinedNonNullAny;
exports.definedNonNullAnySchema = zod_1.z.any().refine((v) => (0, exports.isDefinedNonNullAny)(v));
exports.CompareVariantSchema = zod_1.z.enum(['CHECKBOX', 'ICON']);
exports.ProductFiltersLayoutSchema = zod_1.z.enum(['DEFAULT', 'SIDEBAR']);
>>>>>>> 9dfd43ab4 ([GCOM-1108] rm unnecessary configs, host app on solo next environment, cleanup unnecessary packages,)
=======
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
function GraphCommerceConfigSchema() {
    return _zod.z.object({
        canonicalBaseUrl: _zod.z.string().min(1),
        cartDisplayPricesInclTax: _zod.z.boolean().nullish(),
        compare: _zod.z.boolean().nullish(),
        compareVariant: CompareVariantSchema.nullish(),
        configurableVariantForSimple: _zod.z.boolean().nullish(),
        configurableVariantValues: MagentoConfigurableVariantValuesSchema().nullish(),
        crossSellsHideCartItems: _zod.z.boolean().nullish(),
        crossSellsRedirectItems: _zod.z.boolean().nullish(),
        customerRequireEmailConfirmation: _zod.z.boolean().nullish(),
        debug: GraphCommerceDebugConfigSchema().nullish(),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
        demoMode: _zod.z.boolean().nullish(),
        googleAnalyticsId: _zod.z.string().nullish(),
        googleRecaptchaKey: _zod.z.string().nullish(),
        googleTagmanagerId: _zod.z.string().nullish(),
<<<<<<< HEAD
        hygraphAppClientId: _zod.z.string().nullish(),
        hygraphAppClientSecret: _zod.z.string().nullish(),
=======
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
        hygraphEndpoint: _zod.z.string().min(1),
        hygraphProjectId: _zod.z.string().nullish(),
        hygraphWriteAccessEndpoint: _zod.z.string().nullish(),
        hygraphWriteAccessToken: _zod.z.string().nullish(),
        legacyProductRoute: _zod.z.boolean().nullish(),
        limitSsg: _zod.z.boolean().nullish(),
        magentoEndpoint: _zod.z.string().min(1),
        previewSecret: _zod.z.string().nullish(),
        productFiltersLayout: ProductFiltersLayoutSchema.nullish(),
        productFiltersPro: _zod.z.boolean().nullish(),
        productRoute: _zod.z.string().nullish(),
        robotsAllow: _zod.z.boolean().nullish(),
<<<<<<< HEAD
        sidebarGallery: SidebarGalleryConfigSchema().nullish(),
        storefront: _zod.z.array(GraphCommerceStorefrontConfigSchema()),
        wishlistHideForGuests: _zod.z.boolean().nullish(),
        wishlistShowFeedbackMessage: _zod.z.boolean().nullish()
=======
        demoMode: zod_1.z.boolean().nullish(),
        googleAnalyticsId: zod_1.z.string().nullish(),
        googleRecaptchaKey: zod_1.z.string().nullish(),
        googleTagmanagerId: zod_1.z.string().nullish(),
        hygraphEndpoint: zod_1.z.string().min(1),
        hygraphProjectId: zod_1.z.string().nullish(),
        hygraphWriteAccessEndpoint: zod_1.z.string().nullish(),
        hygraphWriteAccessToken: zod_1.z.string().nullish(),
        legacyProductRoute: zod_1.z.boolean().nullish(),
        limitSsg: zod_1.z.boolean().nullish(),
        magentoEndpoint: zod_1.z.string().min(1),
        previewSecret: zod_1.z.string().nullish(),
        productFiltersLayout: exports.ProductFiltersLayoutSchema.nullish(),
        productFiltersPro: zod_1.z.boolean().nullish(),
        productRoute: zod_1.z.string().nullish(),
        robotsAllow: zod_1.z.boolean().nullish(),
        storefront: zod_1.z.array(GraphCommerceStorefrontConfigSchema()),
        wishlistHideForGuests: zod_1.z.boolean().nullish(),
        wishlistIgnoreProductWishlistStatus: zod_1.z.boolean().nullish(),
        wishlistShowFeedbackMessage: zod_1.z.boolean().nullish()
>>>>>>> 9dfd43ab4 ([GCOM-1108] rm unnecessary configs, host app on solo next environment, cleanup unnecessary packages,)
=======
        storefront: _zod.z.array(GraphCommerceStorefrontConfigSchema()),
        wishlistHideForGuests: _zod.z.boolean().nullish(),
        wishlistIgnoreProductWishlistStatus: _zod.z.boolean().nullish(),
        wishlistShowFeedbackMessage: _zod.z.boolean().nullish()
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
    });
}
function GraphCommerceDebugConfigSchema() {
    return _zod.z.object({
        pluginStatus: _zod.z.boolean().nullish(),
        webpackCircularDependencyPlugin: _zod.z.boolean().nullish(),
        webpackDuplicatesPlugin: _zod.z.boolean().nullish()
    });
}
function GraphCommerceStorefrontConfigSchema() {
    return _zod.z.object({
        canonicalBaseUrl: _zod.z.string().nullish(),
        cartDisplayPricesInclTax: _zod.z.boolean().nullish(),
        defaultLocale: _zod.z.boolean().nullish(),
        domain: _zod.z.string().nullish(),
        googleAnalyticsId: _zod.z.string().nullish(),
        googleRecaptchaKey: _zod.z.string().nullish(),
        googleTagmanagerId: _zod.z.string().nullish(),
        hygraphLocales: _zod.z.array(_zod.z.string().min(1)).nullish(),
        linguiLocale: _zod.z.string().nullish(),
        locale: _zod.z.string().min(1),
        magentoStoreCode: _zod.z.string().min(1)
    });
}
function MagentoConfigurableVariantValuesSchema() {
    return _zod.z.object({
        content: _zod.z.boolean().nullish(),
        gallery: _zod.z.boolean().nullish(),
        url: _zod.z.boolean().nullish()
    });
}
<<<<<<< HEAD
<<<<<<< HEAD
function SidebarGalleryConfigSchema() {
    return _zod.z.object({
        paginationVariant: SidebarGalleryPaginationVariantSchema.nullish()
    });
}
=======
exports.MagentoConfigurableVariantValuesSchema = MagentoConfigurableVariantValuesSchema;
>>>>>>> 9dfd43ab4 ([GCOM-1108] rm unnecessary configs, host app on solo next environment, cleanup unnecessary packages,)
=======
>>>>>>> 6ccab5899 ([GCOM-1108] run codegen)
