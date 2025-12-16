export default function Alert({ alert }) {
    return (
        <div style={{ height: "60px" }}>
            {alert && (
                <div
                    className={`alert alert-${alert.type} alert-dismissible fade show shadow-sm`}
                    role="alert"
                >
                    <strong>
                        {alert.type === "success" && "✅ Success "}
                        {alert.type === "danger" && "❌ Error "}
                        {alert.type === "warning" && "⚠️ Warning "}
                        {alert.type === "info" && "ℹ️ Info "}
                    </strong>
                    {alert.msg}
                </div>
            )}
        </div>
    );
}