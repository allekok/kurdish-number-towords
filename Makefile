test:
	@git submodule init
	@git submodule update
	@cat str-to-num/str_to_num.js > _.js
	@cat num_to_str.js >> _.js
	@cat test.js >> _.js
	@echo 'test(6666,1e15)' >> _.js
	@node _.js
	@rm _.js
