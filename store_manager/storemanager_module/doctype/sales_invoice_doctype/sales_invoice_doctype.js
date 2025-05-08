// Copyright (c) 2025, komal panchal and contributors
// For license information, please see license.txt

// frappe.ui.form.on("sales child doctype", {
// 	validate: function(frm) {
//		if (frm.doc.quantity > frm.doc.product.quantity_in_stock) {
//			frm.throw("Quantity should be less than or equal to quantity in stock");
//		}
//		if frm.doc.product.active == 0 {
//			frm.throw("Product is not active");
//		}
// 	}
//	after_submit: function(frm) {
//		frm.doc.product.quantity_in_stock = frm.doc.product.quantity_in_stock - frm.doc.quantity
//
//	}
// });
