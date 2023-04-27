module.exports = ({ env }) => ({
    seo: {enabled: true},
    upload: {
        provider: 'local',
        providerOptions: {
          useFilename: true,
          use_original_filename: true,
        },
      },
});