module.exports = ({ env }) => ({
    seo: {enabled: true},
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_ovZxM78cJZVgziwZw8EmPkwFPeVG/uPIuO9BjgR",
            apiToken: "22Sya2FgeU0W909tPcq2OwWP",
            appFilter: "homapilot-cms",
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
});