import { Skeleton, Space, Divider, Grid } from "antd";

const { useBreakpoint } = Grid;

const ResProjectsSkeleton = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <div
      style={{
        padding: isMobile ? "16px" : "24px",
      }}
    >
      <Space direction="vertical" size={36} style={{ width: "100%" }}>
        {[1, 2, 3].map((item) => (
          <div key={item}>
            {/* Project Title */}
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 2,
                width: isMobile
                  ? ["100%", "90%"]
                  : ["85%", "60%"],
              }}
            />

            <Space
              orientation="vertical"
              size={10}
              style={{
                width: "100%",
                marginTop: 14,
              }}
            >
              {/* PI */}
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 180 : 320,
                  height: 16,
                }}
              />

              {/* Co-PI */}
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 200 : 420,
                  height: 16,
                }}
              />

              {/* Duration */}
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 160 : 280,
                  height: 16,
                }}
              />

              {/* Amount */}
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 150 : 220,
                  height: 16,
                }}
              />

              {/* Funding */}
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 180 : 240,
                  height: 16,
                }}
              />

              {/* Website */}
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 220 : 420,
                  height: 16,
                }}
              />
            </Space>

            {item !== 3 && (
              <Divider
                style={{
                  margin: "28px 0 0",
                }}
              />
            )}
          </div>
        ))}
      </Space>
    </div>
  );
};

export default ResProjectsSkeleton;