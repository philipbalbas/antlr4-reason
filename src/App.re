let input = "define vehicle sub entity;";

let chars = Antlr4.InputStream.make(input);
let lexer = Antlr4.Lexer.make(chars);
let tokens = Antlr4.CommonTokenStream.make(lexer);
let parser = Antlr4.Parser.make(tokens);
let visitor = Antlr4.Visitor.make();

let tree = parser |> Antlr4.query();

// tree |> Antlr4.accept(visitor);

Js.log(tree);