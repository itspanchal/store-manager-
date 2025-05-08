# store_manager/api.py

import frappe
from frappe import _

@frappe.whitelist()
def get_low_stock_products():
    # Replace 'Product' with your actual DocType name, e.g., 'Item' in ERPNext
    low_stock_items = frappe.get_all("Product",
        filters={"quantity_in_stock": ["<", 5]},
        fields=["name", "quantity_in_stock"]
    )
    return low_stock_items
