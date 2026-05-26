import { Skeleton, Space, Divider } from "antd";

const PublicationsSkeleton = () => {
  return (
    <div style={{ padding: "24px 16px" }}>
      {[1, 2].map((year) => (
        <div key={year} style={{ marginBottom: 50 }}>
          {/* Year */}
          <Skeleton.Input
            active
            style={{
              width: 90,
              height: 34,
              marginBottom: 14,
            }}
          />

          <Divider style={{ margin: "0 0 28px 0" }} />

          <Space orientation="vertical" size={32} style={{ width: "100%" }}>
            {[1, 2, 3].map((item) => (
              <div key={item}>
                {/* Title */}
                <Skeleton 
                  active
                  title={false}
                  paragraph={{
                    rows: 2,
                    width: ["92%", "70%"],
                  }}
                />
            

                {/* Authors */}
                <Skeleton.Input
                  active
                  size="small"
                  style={{
                    width: 190,
                    height: 16,
                    marginTop: 8,
                    marginBottom: 10,
                  }}
                />
                <br />

                {/* Journal */}
                <Skeleton.Input
                  active
                  size="small"
                  style={{
                    width: 90,
                    height: 16,
                  }}
                />
              </div>
            ))}
          </Space>
        </div>
      ))}
    </div>
  );
};

export default PublicationsSkeleton;