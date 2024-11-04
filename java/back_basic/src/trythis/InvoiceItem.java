package trythis;

public class InvoiceItem {
	private String id;
	private String desc;
	private int qty;
	private double unitPrice;

	public InvoiceItem(String id, String desc, int qty, double unitPrice) {
		this.id = id;
		this.desc = desc;
		this.qty = qty;
		this.unitPrice = unitPrice;
	}

	String getId() {
		return id;
	}

	String getDesc() {
		return desc;
	}

	int getQty() {
		return qty;
	}

	void setQty(int qty) {
		this.qty = qty;
	}

	double getUnitPrice() {
		return unitPrice;
	}

	void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	double getTotal() {
		return qty * unitPrice;
	}

	@Override
	public String toString() {

	}
}
