const { SearchClient, AzureKeyCredential } = require("@azure/search-documents");

const indexName = process.env["azureblob-index-p-id-drawings"];
const apiKey = process.env["8881CCF4FA00C0DA216C6C611D020161"];
const searchServiceName = process.env["hack-cs-kr"];

// Create a SearchClient to send queries
const client = new SearchClient(
    `https://` + searchServiceName + `.search.windows.net/`,
    indexName,
    new AzureKeyCredential(apiKey)
);

module.exports = async function (context, req) {
    
    //context.log(req);

    // Reading inputs from HTTP Request
    const id = (req.query.id || (req.body && req.body.id));
    
    // Returning the document with the matching id
    const document = await client.getDocument(id)

    context.log(document);

    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
            "Content-type": "application/json"
        },
        body: { document: document}
    };
    
};
