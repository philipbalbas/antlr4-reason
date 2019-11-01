type t;
type query;
type visitor;
type parser;

module InputStream = {
  [@bs.module "antlr4"] [@bs.new] external make: string => 'a = "InputStream";
};

module Lexer = {
  [@bs.module "./GraqlLexer"] [@bs.new] external make: 'a => 'a = "GraqlLexer";
};

module CommonTokenStream = {
  [@bs.module "antlr4"] [@bs.new]
  external make: 'a => 'a = "CommonTokenStream";
};

module Parser = {
  [@bs.module "./GraqlParser"] [@bs.new]
  external make: 'a => 'a = "GraqlParser";
};

module Visitor = {
  [@bs.module "./GraqlVisitor"] [@bs.new]
  external make: 'a => visitor = "GraqlVisitor";
};

// module CustomVisitor = {
//   let make = (ctx) => {
//     switch (ctx.children) {
//     | Some(children) => children
//     | None =>
//     };
//   }
// };

[@bs.send.pipe: query] external accept: visitor => 'a = "accept";
[@bs.send.pipe: t] external query: 'a => query = "query";