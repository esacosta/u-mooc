// This is an open source Javascript client for our API.
// Feel free to modify it and share it freely.

function LMS_API(args) {
	this.url = args.url;
	this.api_key = args.api_key;
	this.api_version = args.api_version;

	// version

	this.get_version = function(success, failure) {
		return this.invoke('get_version', null, success, failure);
	}
	
	// accounts

	this.get_my_account = function(success, failure) {
		return this.invoke('get_my_account', null, success, failure);
	}

	this.get_all_users = function(success, failure) {
		return this.invoke('get_all_users', null, success, failure);
	}

	this.get_users_with_ids = function(user_ids, success, failure) {
		return this.invoke('get_users_with_ids', {
			user_ids : this.to_array(user_ids)
		}, success, failure);
	}

	this.get_users_that_match = function(constraints, success, failure) {
		return this.invoke('get_users_that_match', constraints, success, failure);
	}
	
	this.add_user = function(attributes, success, failure) {
		return this.invoke('add_user', attributes, success, failure);		
	}
	
	// classes

	this.get_all_classes = function(success, failure) {
		return this.invoke('get_all_classes', null, success, failure);
	}

	this.get_classes_with_ids = function(class_ids, success, failure) {
		return this.invoke('get_classes_with_ids', {
			class_ids : this.to_array(class_ids)
		}, success, failure);
	}

	this.get_classes_for_organization = function(organization_id, success, failure) {
		return this.invoke('get_classes_for_organization', {
			organization_id : organization_id
		}, success, failure);
	}
	
	this.get_classes_taught_by = function(user_id, success, failure) {
		return this.invoke('get_classes_taught_by', {
			user_id : user_id
		}, success, failure);
	}

	this.get_classes_enrolled_by = function(user_id, success, failure) {
		return this.invoke('get_classes_enrolled_by', {
			user_id : user_id
		}, success, failure);
	}

	this.get_teachers_for_class = function(class_id, success, failure) {
		return this.invoke('get_teachers_for_class', {
			class_id : class_id
		}, success, failure);
	}

	this.get_students_for_class = function(class_id, success, failure) {
		return this.invoke('get_students_for_class', {
			class_id : class_id
		}, success, failure);
	}
	
	// organizations
	
	this.get_all_organizations = function(success, failure) {
		return this.invoke('get_all_organizations', null, success, failure);
	}

	this.get_organizations_with_ids = function(organization_ids, success, failure) {
		return this.invoke('get_organizations_with_ids', {
			organization_ids : this.to_array(organization_ids)
		}, success, failure);
	}

	// certificates
	
	this.get_all_certificates = function(success, failure) {
		return this.invoke('get_all_certificates', null, success, failure);
	}

	this.get_certificates_with_ids = function(certificate_ids, success, failure) {
		return this.invoke('get_certificates_with_ids', {
			certificate_ids : this.to_array(certificate_ids)
		}, success, failure);
	}

	// lessons

	this.get_lessons_for_class = function(class_id, success, failure) {
		return this.invoke('get_lessons_for_class', {
			class_id : class_id
		}, success, failure);
	}
	
	// assignments

	this.get_assignments_for_class = function(class_id, success, failure) {
		return this.invoke('get_assignments_for_class', {
			class_id : class_id
		}, success, failure);
	}
	
	// grades

	this.get_grades_for_class = function(class_id, success, failure) {
		return this.invoke('get_grades_for_class', {
			class_id : class_id
		}, success, failure);
	}
	
	// sessions
  
	this.get_session_details = function(user_ids, success, failure) {
		return this.invoke('get_session_details', {
			user_ids : this.to_array(user_ids)
		}, success, failure);
	}

	// class reports
	
	this.get_class_report = function(class_id, constraints, success, failure) {
		var args = {};
		
		for (var key in constraints) {
			args[key] = constraints[key];
		}
		
		args.class_id = class_id;		
		return this.invoke('get_class_report', args, success, failure);
	}
		
	// array helper

	this.to_array = function(ids) {
		return (ids instanceof Array ? ids : [ids]);
	}
	
	// invoke

	this.invoke = function(method, args, success, failure) {
		var params = [];
		
		if (this.api_key != null) {
			params.push(['api_key', this.api_key]);
		}

		if (this.api_version != null) {
			params.push(['api_version', this.api_version]);
		}

		if (args != null) {
			for (var property in args) {
				params.push([property, args[property]]);
			}
		}

		var parts = [];

		for (var i = 0; i < params.length; i++) {
			if (params[i][1] instanceof Array) {
				for (var j = 0; j < params[i][1].length; j++) {
					parts.push(params[i][0] + '[]=' + encodeURIComponent(params[i][1][j]));
				}
			} else {
				parts.push(params[i][0] + '=' + encodeURIComponent(params[i][1]));
			}
		}

		var method_url = this.url + '/api/' + method;
		
		if (parts.length > 0) {
			method_url += '?' + parts.join('&');
		}

		$.ajax({
			url : method_url,
			dataType : 'jsonp',
			success : function(json, text_status, jqXHR) {
				success(json);
			},
			error : function(jqXHR, text_status, errorThrown) {
				failure(jqXHR.status, text_status);
			}
		});
	}
}