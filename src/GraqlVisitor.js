// Generated from Graql.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GraqlParser.

function GraqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GraqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GraqlVisitor.prototype.constructor = GraqlVisitor;

// Visit a parse tree produced by GraqlParser#eof_query.
GraqlVisitor.prototype.visitEof_query = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#eof_query_list.
GraqlVisitor.prototype.visitEof_query_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#eof_pattern.
GraqlVisitor.prototype.visitEof_pattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#eof_pattern_list.
GraqlVisitor.prototype.visitEof_pattern_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query.
GraqlVisitor.prototype.visitQuery = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_define.
GraqlVisitor.prototype.visitQuery_define = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_undefine.
GraqlVisitor.prototype.visitQuery_undefine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_insert.
GraqlVisitor.prototype.visitQuery_insert = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_delete.
GraqlVisitor.prototype.visitQuery_delete = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_get.
GraqlVisitor.prototype.visitQuery_get = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_compute.
GraqlVisitor.prototype.visitQuery_compute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_get_aggregate.
GraqlVisitor.prototype.visitQuery_get_aggregate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_get_group.
GraqlVisitor.prototype.visitQuery_get_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#query_get_group_agg.
GraqlVisitor.prototype.visitQuery_get_group_agg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#variables.
GraqlVisitor.prototype.visitVariables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#filters.
GraqlVisitor.prototype.visitFilters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#sort.
GraqlVisitor.prototype.visitSort = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#offset.
GraqlVisitor.prototype.visitOffset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#limit.
GraqlVisitor.prototype.visitLimit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#function_aggregate.
GraqlVisitor.prototype.visitFunction_aggregate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#function_method.
GraqlVisitor.prototype.visitFunction_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#function_group.
GraqlVisitor.prototype.visitFunction_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#patterns.
GraqlVisitor.prototype.visitPatterns = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#pattern.
GraqlVisitor.prototype.visitPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#pattern_conjunction.
GraqlVisitor.prototype.visitPattern_conjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#pattern_disjunction.
GraqlVisitor.prototype.visitPattern_disjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#pattern_negation.
GraqlVisitor.prototype.visitPattern_negation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#pattern_statement.
GraqlVisitor.prototype.visitPattern_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#statement_type.
GraqlVisitor.prototype.visitStatement_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type_property.
GraqlVisitor.prototype.visitType_property = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#statement_instance.
GraqlVisitor.prototype.visitStatement_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#statement_thing.
GraqlVisitor.prototype.visitStatement_thing = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#statement_relation.
GraqlVisitor.prototype.visitStatement_relation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#statement_attribute.
GraqlVisitor.prototype.visitStatement_attribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#relation.
GraqlVisitor.prototype.visitRelation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#role_player.
GraqlVisitor.prototype.visitRole_player = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#player.
GraqlVisitor.prototype.visitPlayer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#via.
GraqlVisitor.prototype.visitVia = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#attributes.
GraqlVisitor.prototype.visitAttributes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#attribute.
GraqlVisitor.prototype.visitAttribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#operation.
GraqlVisitor.prototype.visitOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#assignment.
GraqlVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#comparison.
GraqlVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#comparator.
GraqlVisitor.prototype.visitComparator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#comparable.
GraqlVisitor.prototype.visitComparable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#containable.
GraqlVisitor.prototype.visitContainable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_conditions.
GraqlVisitor.prototype.visitCompute_conditions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_method.
GraqlVisitor.prototype.visitCompute_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#conditions_count.
GraqlVisitor.prototype.visitConditions_count = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#conditions_value.
GraqlVisitor.prototype.visitConditions_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#conditions_central.
GraqlVisitor.prototype.visitConditions_central = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#conditions_cluster.
GraqlVisitor.prototype.visitConditions_cluster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#conditions_path.
GraqlVisitor.prototype.visitConditions_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#input_count.
GraqlVisitor.prototype.visitInput_count = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#input_value.
GraqlVisitor.prototype.visitInput_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#input_central.
GraqlVisitor.prototype.visitInput_central = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#input_cluster.
GraqlVisitor.prototype.visitInput_cluster = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#input_path.
GraqlVisitor.prototype.visitInput_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_direction.
GraqlVisitor.prototype.visitCompute_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_target.
GraqlVisitor.prototype.visitCompute_target = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_scope.
GraqlVisitor.prototype.visitCompute_scope = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_config.
GraqlVisitor.prototype.visitCompute_config = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_algorithm.
GraqlVisitor.prototype.visitCompute_algorithm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_args.
GraqlVisitor.prototype.visitCompute_args = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_args_array.
GraqlVisitor.prototype.visitCompute_args_array = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#compute_arg.
GraqlVisitor.prototype.visitCompute_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type.
GraqlVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type_label.
GraqlVisitor.prototype.visitType_label = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type_labels.
GraqlVisitor.prototype.visitType_labels = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type_label_array.
GraqlVisitor.prototype.visitType_label_array = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type_native.
GraqlVisitor.prototype.visitType_native = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#type_name.
GraqlVisitor.prototype.visitType_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#datatype.
GraqlVisitor.prototype.visitDatatype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#literal.
GraqlVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#regex.
GraqlVisitor.prototype.visitRegex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by GraqlParser#unreserved.
GraqlVisitor.prototype.visitUnreserved = function(ctx) {
  return this.visitChildren(ctx);
};



exports.GraqlVisitor = GraqlVisitor;