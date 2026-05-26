import { Card, Skeleton, Space, Divider, Grid } from "antd";

const { useBreakpoint } = Grid;

const DevProjectsSkeleton = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Space
      direction="vertical"
      size={24}
      style={{
        width: "100%",
        padding: isMobile ? 12 : 24,
      }}
    >
      {[1, 2, 3].map((item) => (
        <Card
          key={item}
          bordered
          style={{
            borderRadius: 12,
          }}
        >
          {/* Title */}
          <Skeleton.Input
            active
            style={{
              width: isMobile ? "70%" : 240,
              height: 30,
              marginBottom: 18,
            }}
          />

          {/* Description */}
          <Skeleton
            active
            title={false}
            paragraph={{
              rows: item === 3 ? 5 : 3,
              width: isMobile
                ? ["100%", "96%", "88%", "92%", "70%"]
                : ["100%", "95%", "90%", "85%", "70%"],
            }}
          />

          {/* Tech Stack Box */}
          <div
            style={{
              background: "#f5f5f5",
              borderRadius: 8,
              padding: isMobile ? 12 : 16,
              marginTop: 18,
              marginBottom: 18,
            }}
          >
            <Space orientation="vertical" size={10}>
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: isMobile ? 140 : 180,
                  height: 16,
                }}
              />

              {item === 3 && (
                <>
                  <Skeleton.Input
                    active
                    size="small"
                    style={{
                      width: isMobile ? 190 : 250,
                      height: 16,
                    }}
                  />

                  <Skeleton.Input
                    active
                    size="small"
                    style={{
                      width: isMobile ? 170 : 220,
                      height: 16,
                    }}
                  />
                </>
              )}
            </Space>
          </div>

          {/* Links */}
          <Space
            size={20}
            wrap
          >
            <Skeleton.Input
              active
              size="small"
              style={{
                width: 90,
                height: 18,
              }}
            />

            <Skeleton.Input
              active
              size="small"
              style={{
                width: 90,
                height: 18,
              }}
            />

            {item === 3 && (
              <Skeleton.Input
                active
                size="small"
                style={{
                  width: 140,
                  height: 18,
                }}
              />
            )}
          </Space>
        </Card>
      ))}
    </Space>
  );
};

export default DevProjectsSkeleton;