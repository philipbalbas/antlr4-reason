// Generated from Graql.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GraqlParser.
function GraqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GraqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GraqlListener.prototype.constructor = GraqlListener;

// Enter a parse tree produced by GraqlParser#eof_query.
GraqlListener.prototype.enterEof_query = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#eof_query.
GraqlListener.prototype.exitEof_query = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#eof_query_list.
GraqlListener.prototype.enterEof_query_list = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#eof_query_list.
GraqlListener.prototype.exitEof_query_list = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#eof_pattern.
GraqlListener.prototype.enterEof_pattern = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#eof_pattern.
GraqlListener.prototype.exitEof_pattern = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#eof_pattern_list.
GraqlListener.prototype.enterEof_pattern_list = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#eof_pattern_list.
GraqlListener.prototype.exitEof_pattern_list = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query.
GraqlListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query.
GraqlListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_define.
GraqlListener.prototype.enterQuery_define = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_define.
GraqlListener.prototype.exitQuery_define = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_undefine.
GraqlListener.prototype.enterQuery_undefine = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_undefine.
GraqlListener.prototype.exitQuery_undefine = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_insert.
GraqlListener.prototype.enterQuery_insert = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_insert.
GraqlListener.prototype.exitQuery_insert = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_delete.
GraqlListener.prototype.enterQuery_delete = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_delete.
GraqlListener.prototype.exitQuery_delete = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_get.
GraqlListener.prototype.enterQuery_get = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_get.
GraqlListener.prototype.exitQuery_get = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_compute.
GraqlListener.prototype.enterQuery_compute = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_compute.
GraqlListener.prototype.exitQuery_compute = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_get_aggregate.
GraqlListener.prototype.enterQuery_get_aggregate = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_get_aggregate.
GraqlListener.prototype.exitQuery_get_aggregate = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_get_group.
GraqlListener.prototype.enterQuery_get_group = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_get_group.
GraqlListener.prototype.exitQuery_get_group = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#query_get_group_agg.
GraqlListener.prototype.enterQuery_get_group_agg = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#query_get_group_agg.
GraqlListener.prototype.exitQuery_get_group_agg = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#variables.
GraqlListener.prototype.enterVariables = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#variables.
GraqlListener.prototype.exitVariables = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#filters.
GraqlListener.prototype.enterFilters = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#filters.
GraqlListener.prototype.exitFilters = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#sort.
GraqlListener.prototype.enterSort = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#sort.
GraqlListener.prototype.exitSort = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#offset.
GraqlListener.prototype.enterOffset = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#offset.
GraqlListener.prototype.exitOffset = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#limit.
GraqlListener.prototype.enterLimit = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#limit.
GraqlListener.prototype.exitLimit = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#function_aggregate.
GraqlListener.prototype.enterFunction_aggregate = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#function_aggregate.
GraqlListener.prototype.exitFunction_aggregate = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#function_method.
GraqlListener.prototype.enterFunction_method = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#function_method.
GraqlListener.prototype.exitFunction_method = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#function_group.
GraqlListener.prototype.enterFunction_group = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#function_group.
GraqlListener.prototype.exitFunction_group = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#patterns.
GraqlListener.prototype.enterPatterns = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#patterns.
GraqlListener.prototype.exitPatterns = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#pattern.
GraqlListener.prototype.enterPattern = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#pattern.
GraqlListener.prototype.exitPattern = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#pattern_conjunction.
GraqlListener.prototype.enterPattern_conjunction = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#pattern_conjunction.
GraqlListener.prototype.exitPattern_conjunction = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#pattern_disjunction.
GraqlListener.prototype.enterPattern_disjunction = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#pattern_disjunction.
GraqlListener.prototype.exitPattern_disjunction = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#pattern_negation.
GraqlListener.prototype.enterPattern_negation = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#pattern_negation.
GraqlListener.prototype.exitPattern_negation = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#pattern_statement.
GraqlListener.prototype.enterPattern_statement = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#pattern_statement.
GraqlListener.prototype.exitPattern_statement = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#statement_type.
GraqlListener.prototype.enterStatement_type = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#statement_type.
GraqlListener.prototype.exitStatement_type = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type_property.
GraqlListener.prototype.enterType_property = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type_property.
GraqlListener.prototype.exitType_property = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#statement_instance.
GraqlListener.prototype.enterStatement_instance = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#statement_instance.
GraqlListener.prototype.exitStatement_instance = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#statement_thing.
GraqlListener.prototype.enterStatement_thing = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#statement_thing.
GraqlListener.prototype.exitStatement_thing = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#statement_relation.
GraqlListener.prototype.enterStatement_relation = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#statement_relation.
GraqlListener.prototype.exitStatement_relation = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#statement_attribute.
GraqlListener.prototype.enterStatement_attribute = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#statement_attribute.
GraqlListener.prototype.exitStatement_attribute = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#relation.
GraqlListener.prototype.enterRelation = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#relation.
GraqlListener.prototype.exitRelation = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#role_player.
GraqlListener.prototype.enterRole_player = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#role_player.
GraqlListener.prototype.exitRole_player = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#player.
GraqlListener.prototype.enterPlayer = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#player.
GraqlListener.prototype.exitPlayer = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#via.
GraqlListener.prototype.enterVia = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#via.
GraqlListener.prototype.exitVia = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#attributes.
GraqlListener.prototype.enterAttributes = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#attributes.
GraqlListener.prototype.exitAttributes = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#attribute.
GraqlListener.prototype.enterAttribute = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#attribute.
GraqlListener.prototype.exitAttribute = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#operation.
GraqlListener.prototype.enterOperation = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#operation.
GraqlListener.prototype.exitOperation = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#assignment.
GraqlListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#assignment.
GraqlListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#comparison.
GraqlListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#comparison.
GraqlListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#comparator.
GraqlListener.prototype.enterComparator = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#comparator.
GraqlListener.prototype.exitComparator = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#comparable.
GraqlListener.prototype.enterComparable = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#comparable.
GraqlListener.prototype.exitComparable = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#containable.
GraqlListener.prototype.enterContainable = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#containable.
GraqlListener.prototype.exitContainable = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_conditions.
GraqlListener.prototype.enterCompute_conditions = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_conditions.
GraqlListener.prototype.exitCompute_conditions = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_method.
GraqlListener.prototype.enterCompute_method = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_method.
GraqlListener.prototype.exitCompute_method = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#conditions_count.
GraqlListener.prototype.enterConditions_count = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#conditions_count.
GraqlListener.prototype.exitConditions_count = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#conditions_value.
GraqlListener.prototype.enterConditions_value = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#conditions_value.
GraqlListener.prototype.exitConditions_value = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#conditions_central.
GraqlListener.prototype.enterConditions_central = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#conditions_central.
GraqlListener.prototype.exitConditions_central = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#conditions_cluster.
GraqlListener.prototype.enterConditions_cluster = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#conditions_cluster.
GraqlListener.prototype.exitConditions_cluster = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#conditions_path.
GraqlListener.prototype.enterConditions_path = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#conditions_path.
GraqlListener.prototype.exitConditions_path = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#input_count.
GraqlListener.prototype.enterInput_count = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#input_count.
GraqlListener.prototype.exitInput_count = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#input_value.
GraqlListener.prototype.enterInput_value = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#input_value.
GraqlListener.prototype.exitInput_value = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#input_central.
GraqlListener.prototype.enterInput_central = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#input_central.
GraqlListener.prototype.exitInput_central = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#input_cluster.
GraqlListener.prototype.enterInput_cluster = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#input_cluster.
GraqlListener.prototype.exitInput_cluster = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#input_path.
GraqlListener.prototype.enterInput_path = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#input_path.
GraqlListener.prototype.exitInput_path = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_direction.
GraqlListener.prototype.enterCompute_direction = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_direction.
GraqlListener.prototype.exitCompute_direction = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_target.
GraqlListener.prototype.enterCompute_target = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_target.
GraqlListener.prototype.exitCompute_target = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_scope.
GraqlListener.prototype.enterCompute_scope = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_scope.
GraqlListener.prototype.exitCompute_scope = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_config.
GraqlListener.prototype.enterCompute_config = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_config.
GraqlListener.prototype.exitCompute_config = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_algorithm.
GraqlListener.prototype.enterCompute_algorithm = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_algorithm.
GraqlListener.prototype.exitCompute_algorithm = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_args.
GraqlListener.prototype.enterCompute_args = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_args.
GraqlListener.prototype.exitCompute_args = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_args_array.
GraqlListener.prototype.enterCompute_args_array = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_args_array.
GraqlListener.prototype.exitCompute_args_array = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#compute_arg.
GraqlListener.prototype.enterCompute_arg = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#compute_arg.
GraqlListener.prototype.exitCompute_arg = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type.
GraqlListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type.
GraqlListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type_label.
GraqlListener.prototype.enterType_label = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type_label.
GraqlListener.prototype.exitType_label = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type_labels.
GraqlListener.prototype.enterType_labels = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type_labels.
GraqlListener.prototype.exitType_labels = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type_label_array.
GraqlListener.prototype.enterType_label_array = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type_label_array.
GraqlListener.prototype.exitType_label_array = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type_native.
GraqlListener.prototype.enterType_native = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type_native.
GraqlListener.prototype.exitType_native = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#type_name.
GraqlListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#type_name.
GraqlListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#datatype.
GraqlListener.prototype.enterDatatype = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#datatype.
GraqlListener.prototype.exitDatatype = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#literal.
GraqlListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#literal.
GraqlListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#regex.
GraqlListener.prototype.enterRegex = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#regex.
GraqlListener.prototype.exitRegex = function(ctx) {
};


// Enter a parse tree produced by GraqlParser#unreserved.
GraqlListener.prototype.enterUnreserved = function(ctx) {
};

// Exit a parse tree produced by GraqlParser#unreserved.
GraqlListener.prototype.exitUnreserved = function(ctx) {
};



exports.GraqlListener = GraqlListener;