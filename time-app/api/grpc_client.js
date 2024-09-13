const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('library.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const libraryProto = grpc.loadPackageDefinition(packageDefinition).com.example.grpc;

const client = new libraryProto.LibraryService('localhost:50051', grpc.credentials.createInsecure());

// Пример вызова RPC метода
client.SendBooksAndAuthors({ books: [...] }, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Books and authors sent successfully');
  }
});
