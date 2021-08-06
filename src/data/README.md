# User data retrieval and storing

The data/ directory handles user data retrieval from the server using react-query. Local store/cache is handled with react-query cache for simplicity.

The app does not make real HTTP requests for convenience working with it. Instead, code in data/fake/ directory pretends to be a server. The rest of the codebase, including react-query needs not know whether or not the HTTP requests are real.
